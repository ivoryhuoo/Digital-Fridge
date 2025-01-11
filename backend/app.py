from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from datetime import datetime
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

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

        return jsonify({"message": "Item added successfully"}), 201

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

if __name__ == "__main__":
    print("Starting Flask server...")
    app.run(debug=True)
