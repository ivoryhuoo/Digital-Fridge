"use client";
import styles from "../styles/fridge.module.css";
import { useState, useEffect } from "react";
import { Tooltip } from "@nextui-org/react";
import { Button } from "react-bootstrap";

export default function Fridge() {
    const [ingredients, setIngredients] = useState([]);
    const [error, setError] = useState(null);

    // Fetch ingredients from your backend
    const fetchIngredients = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/getAllItems");
            const data = await response.json();

            if (response.ok) {
                const enrichedData = data.map((item) => ({
                    ...item,
                    image: `https://spoonacular.com/cdn/ingredients_100x100/${item.name
                        .toLowerCase()
                        .replace(/ /g, "-")}.jpg`,
                }));
                setIngredients(enrichedData);
            } else {
                setError(data.error || "Failed to fetch fridge items.");
            }
        } catch (err) {
            setError("Error fetching fridge items.");
            console.error(err);
        }
    };

    const handleRemoveItem = async (itemId) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/deleteItem/${itemId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                console.log(`Item with ID ${itemId} removed successfully from the backend.`);
                setIngredients((prevIngredients) => {
                    const updatedIngredients = prevIngredients.filter((item) => item.id !== itemId);
                    console.log("Updated Ingredients List:", updatedIngredients);
                    return updatedIngredients;
                });
            } else {
                const errorData = await response.json();
                console.error(`Failed to remove item: ${errorData.error}`);
                alert(`Failed to remove item: ${errorData.error}`);
            }
        } catch (err) {
            console.error("An error occurred while removing the item:", err);
            alert("An error occurred while removing the item.");
        }
    };
    

    useEffect(() => {
        fetchIngredients();
    }, []);

    if (error) {
        return <p className={styles.error}>{error}</p>;
    }

    if (!ingredients.length) {
        return <p className={styles.loading}>Loading fridge items...</p>;
    }

    const rows = [0, 1, 2, 3, 4]; // Define the number of rows in the fridge
    const columns = 4; // Number of items per row

    return (
        <div className={styles.frame}>
            <div className={styles.lining}>
                {rows.map((rowIndex) => (
                    <div className={styles.shadows} key={rowIndex}>
                        <div className={styles.empties}>
                            {ingredients
                                .slice(rowIndex * columns, rowIndex * columns + columns)
                                .map((item) => (
                                    <Tooltip
                                        key={item.id}
                                        content={
                                            <div className={styles.info}>
                                                <div className={styles.words}>
                                                    <p>Item Name: {item.name}</p>
                                                    <p>Expires by: {item.expiration_date}</p>
                                                    <p>Added on: {item.date_added}</p>
                                                    <Button
                                                        onClick={() => handleRemoveItem(item.id)}
                                                    >
                                                        <p className={styles.delete}>X Remove item</p>
                                                    </Button>
                                                </div>
                                            </div>
                                        }
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className={styles.ingredientImage}
                                        />
                                    </Tooltip>
                                ))}
                        </div>
                        <div className={styles.shelves}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
