from app import app, db  # Import app and db directly from app.py

# Initialize the database and create tables
with app.app_context():
    db.create_all()
    print("Database tables created successfully!")