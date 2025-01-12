from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from datetime import datetime
from flask_cors import CORS
import os
import requests

# Load environment variables
load_dotenv()

# Debugging: Check if environment variables are being loaded
from dotenv import find_dotenv
print("Dotenv file location:", find_dotenv())
print("DATABASE_URL:", os.getenv('DATABASE_URL'))
print("SPOONACULAR_API_KEY:", os.getenv('SPOONACULAR_API_KEY'))

# Initialize Flask app
app = Flask(__name__)

# Enable CORS
CORS(app)

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Define database model
class Item(db.Model):
    __tablename__ = 'items'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    expiration_date = db.Column(db.DateTime, nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)  # Stored as UTC
    quantity = db.Column(db.Integer, nullable=False)

# Define a health check route
@app.route("/", methods=["GET"])
def health_check():
    return {"status": "API is running"}, 200

# Define the /storeItem route
@app.route("/storeItem", methods=["POST"])
def store_item():
    try:
        # Parse JSON payload
        data = request.json

        # Validate payload
        if not all(key in data for key in ("name", "expiration_date", "quantity")):
            return jsonify({"error": "Missing required fields"}), 400

        # Create a new item instance
        new_item = Item(
            name=data["name"],
            expiration_date=datetime.strptime(data["expiration_date"], "%Y-%m-%dT%H:%M:%S"),
            quantity=data["quantity"]
        )

        # Add to database
        db.session.add(new_item)
        db.session.commit()

        # Query all items sorted by expiration_date and return
        items = Item.query.order_by(Item.expiration_date.asc()).all()
        response = []
        for item in items:
            response.append({
                "id": item.id,
                "name": item.name,
                "expiration_date": item.expiration_date.strftime("%Y-%m-%d %H:%M:%S"),
                "date_added": item.date_added.strftime("%Y-%m-%d %H:%M:%S"),
                "quantity": item.quantity,
            })

        return jsonify({
            "message": "Item added successfully",
            "items": response
        }), 201

    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Define the /deleteItem route
@app.route("/deleteItem/<int:item_id>", methods=["DELETE"])
def delete_item(item_id):
    try:
        # Query the item to be deleted
        item = Item.query.get(item_id)

        # Check if the item exists
        if not item:
            return jsonify({"error": "Item not found"}), 404

        # Delete the item
        db.session.delete(item)
        db.session.commit()

        return jsonify({"message": f"Item with ID {item_id} deleted successfully"}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Define the /getAllItems route
@app.route("/getAllItems", methods=["GET"])
def get_all_items():
    try:
        # Query all items sorted by expiration_date in ascending order (earliest to latest)
        items = Item.query.order_by(Item.expiration_date.asc()).all()

        # Prepare the response
        response = []
        for item in items:
            response.append({
                "id": item.id,
                "name": item.name,
                "expiration_date": item.expiration_date.strftime("%Y-%m-%d %H:%M:%S"),
                "date_added": item.date_added.strftime("%Y-%m-%d %H:%M:%S"),
                "quantity": item.quantity,
            })

        return jsonify(response), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Define the /generateRecipe route
@app.route("/generateRecipe", methods=["POST"])
def generate_recipe():
    try:
        # Query ingredients from the database sorted by expiration_date (earliest first)
        items = Item.query.order_by(Item.expiration_date.asc()).all()
        if not items:
            return jsonify({"error": "No ingredients available"}), 400

        # Format ingredients for Spoonacular
        ingredients = ",".join(item.name for item in items)

        # Create request parameters for Spoonacular
        params = {
            "ingredients": ingredients,
            "number": 1,  # Limit to 1 recipe
            "ranking": 1,  # Maximize used ingredients
            "ignorePantry": True,
            "apiKey": os.getenv('SPOONACULAR_API_KEY')  # Use your Spoonacular API key
        }

        # Call Spoonacular API
        response = requests.get(
            "https://api.spoonacular.com/recipes/findByIngredients",
            params=params
        )

        # Check the response from Spoonacular
        if response.status_code == 200:
            return jsonify(response.json()), 200
        else:
            return jsonify({"error": response.json()}), response.status_code

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/getRecipeName", methods=["GET"])
def get_recipe_name():
    try:
        # Query ingredients from the database sorted by expiration_date in ascending order
        items = Item.query.order_by(Item.expiration_date.asc()).all()

        # Check if there are items in the database
        if not items:
            return jsonify({"error": "No items available"}), 404

        # Format ingredients for Spoonacular
        ingredients = ",".join(item.name for item in items)

        # Create request parameters for Spoonacular
        params = {
            "ingredients": ingredients,
            "number": 1,  # Limit to 1 recipe
            "ranking": 1,  # Maximize used ingredients
            "ignorePantry": True,
            "apiKey": os.getenv('SPOONACULAR_API_KEY')  # Use your Spoonacular API key
        }

        # Call Spoonacular API
        response = requests.get(
            "https://api.spoonacular.com/recipes/findByIngredients",
            params=params
        )

        # Check the response from Spoonacular
        if response.status_code == 200:
            recipes = response.json()
            if recipes:  # Ensure at least one recipe is returned
                # Extract and return the recipe title
                recipe_title = recipes[0]["title"]
                return jsonify({"recipe_name": recipe_title}), 200
            else:
                return jsonify({"error": "No recipes found"}), 404
        else:
            return jsonify({"error": response.json()}), response.status_code

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/getExpiryDates", methods=["GET"])
def get_expiry_dates():
    try:
        # Query all items sorted by expiration_date in ascending order
        items = Item.query.order_by(Item.expiration_date.asc()).all()

        # Prepare the response with just the item name and expiration date
        response = [
            {"name": item.name, "expiration_date": item.expiration_date.strftime("%Y-%m-%d %H:%M:%S")}
            for item in items
        ]

        return jsonify(response), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Reset database
@app.route("/resetDatabase", methods=["POST"])
def reset_database():
    try:
        # Drop all tables
        db.drop_all()
        # Recreate all tables
        db.create_all()
        return jsonify({"message": "Database reset successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    print("Starting Flask server...")
    app.run(debug=True)
