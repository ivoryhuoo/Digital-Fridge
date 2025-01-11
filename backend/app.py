from flask import Flask
from models import db  # Import the SQLAlchemy instance

# Initialize Flask app
app = Flask(__name__)

# Configure the database
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///items.db'  # Replace with your DB URI if needed
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db.init_app(app)

# Routes and logic can go here
if __name__ == "__main__":
    app.run(debug=True)