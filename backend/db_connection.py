import mysql.connector

# Connect to the database
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",  
    database="digital_fridge"  
)

cursor = db.cursor()

# Query the database
try:
    cursor.execute("SELECT * FROM items ORDER BY expiration_date ASC")
    results = cursor.fetchall()

    if results:
        for row in results:
            print(row)
    else:
        print("No data found in the 'items' table.")

except mysql.connector.Error as err:
    print(f"Error: {err}")

finally:
    cursor.close()
    db.close()
