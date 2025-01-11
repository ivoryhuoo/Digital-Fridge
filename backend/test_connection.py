from sqlalchemy import create_engine, text
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Get the database URL from .env
DATABASE_URL = os.getenv('DATABASE_URL')

# Create SQLAlchemy engine
engine = create_engine(DATABASE_URL)

# Test the connection
try:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT DATABASE();"))
        print("Connected to:", result.fetchone()[0])
except Exception as e:
    print("Error:", e)
