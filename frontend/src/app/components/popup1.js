"use client";
import styles from "../styles/popup1.module.css";

import { useState } from "react";
import React from "react";

export default function Popup1({ onClose }) {
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [dateAdded, setDateAdded] = useState('');
    const [expirationDate, setExpirationDate] = useState('');

    const handleAddItem = async (event) => {
        event.preventDefault();

        // Ensure the date values are formatted properly for the backend
        const formattedDateAdded = new Date(dateAdded).toISOString().slice(0, 19).replace('T', ' ');
        const formattedExpirationDate = new Date(expirationDate).toISOString().slice(0, 19).replace('T', ' ');
    
        const itemData = {
            name: itemName,
            quantity: parseInt(quantity),
            date_added: formattedDateAdded, // Use formatted date
            expiration_date: formattedExpirationDate, // Use formatted date
        };
    
        try {
            const response = await fetch("http://127.0.0.1:5000/storeItem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(itemData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                console.log("Item added successfully:", data);
                alert("Item added successfully!");
                onClose(); // Close the popup after the item is added
            } else {
                console.error("Error adding item:", data.error);
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("Error connecting to the server:", error);
            alert("Error connecting to the server. Please try again.");
        }
    };    
    
    return (
        <div className={styles.backdisplay}>
            <div className={styles.hold}>
            <svg
                className={styles.arrow}
                onClick={onClose}
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="42"
                viewBox="0 0 48 42"
                fill="none"
            >
                <path
                    d="M17.576 1.43224L1.43511 17.5407C0.516211 18.4581 0 19.7021 0 20.9992C0 22.2963 0.516211 23.5403 1.43511 24.4577L17.576 40.5662C18.2614 41.2507 19.1349 41.7169 20.086 41.9058C21.037 42.0948 22.0228 41.998 22.9187 41.6277L23.274 41.4613C24.0774 41.0511 24.7516 40.4276 25.2225 39.6594C25.6934 38.8912 25.9427 38.0082 25.9429 37.1077V30.7827H43.0984C44.3984 30.7827 45.6451 30.2673 46.5644 29.3499C47.4836 28.4325 48 27.1883 48 25.8909V16.1075L47.9877 15.7406C47.895 14.5099 47.3396 13.3597 46.4328 12.5206C45.5261 11.6814 44.335 11.2153 43.0984 11.2157L25.9429 11.2133V4.8907C25.9427 3.92335 25.6552 2.97779 25.1166 2.17354C24.5779 1.36929 23.8125 0.742463 22.917 0.372305C22.0215 0.0021468 21.0361 -0.0947239 20.0854 0.0939386C19.1347 0.282601 18.2615 0.748326 17.576 1.43224Z"
                    fill="#031996"
                />
            </svg>
                <h1 className={styles.title}>Add Fridge Item</h1>
                <form className={styles.form} onSubmit={handleAddItem}>
                    <div className={styles.contain}>
                    <div className={styles.item}>
                    <label className={styles.name} htmlFor="item-name">Item Name:</label>
                    <input
                        className={styles.fill}
                        type="text"
                        id="item-name"
                        name="item-name"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        required
                    />
                    </div>
                    <div className={styles.item}>
                    <label className={styles.name} htmlFor="quantity">Quantity:</label>
                    <input
                        className={styles.fill}
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                    </div>
                    <div className={styles.item}>
                    <label className={styles.name} htmlFor="date-added">Date Added:</label>
                    <input
                        className={styles.fill}
                        type="datetime-local"
                        id="date-added"
                        name="date-added"
                        value={dateAdded}
                        onChange={(e) => setDateAdded(e.target.value)}
                        required
                    />
                    </div>
                    <div className={styles.item}>
                    <label className={styles.name} htmlFor="expiration-date">Expiration Date:</label>
                    <input
                        className={styles.fill}
                        type="datetime-local"
                        id="expiration-date"
                        name="expiration-date"
                        value={expirationDate}
                        onChange={(e) => setExpirationDate(e.target.value)}
                    />
                    </div>
                    </div>
                    <button className={styles.close} type="submit">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}