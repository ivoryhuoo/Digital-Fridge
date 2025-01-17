"use client";
import { Button } from "react-bootstrap";

import React, { useState, useEffect } from "react";
import styles from "../styles/recipe.module.css";
import Popup2 from './popup2.js'; 

export default function Recipe() {
    const [recipeName, setRecipeName] = useState("Loading...");
    const [likes, setLikes] = useState(null); // State to store likes

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/getRecipeName");
                const data = await response.json();

                if (response.ok) {
                    setRecipeName(data.recipe_name);
                    setLikes(data.likes); // Store likes in state
                } else {
                    setRecipeName("No recipe available");
                    setLikes(null);
                }
            } catch (error) {
                console.error("Error fetching recipe data:", error);
                setRecipeName("Error fetching recipe");
                setLikes(null);
            }
        };

        fetchRecipe();
    }, []); // Runs once when the component mounts

    return (
        <div className={styles.frame}>

            {/* Bowl Icon */}
            <svg
                className={styles.bowl_icon}
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
            >
                <path
                    d="M12 4C11.6835 4.22717 11.4271 4.52797 11.2528 4.87642C11.0786 5.22488 10.9918 5.6105 11 6C10.9918 6.3895 11.0786 6.77512 11.2528 7.12358C11.4271 7.47203 11.6835 7.77283 12 8M16 4C15.6835 4.22717 15.4271 4.52797 15.2528 4.87642C15.0786 5.22488 14.9918 5.6105 15 6C14.9918 6.3895 15.0786 6.77512 15.2528 7.12358C15.4271 7.47203 15.6835 7.77283 16 8M7.99998 4C7.68348 4.22717 7.42705 4.52797 7.25283 4.87642C7.0786 5.22488 6.99182 5.6105 6.99998 6C6.99182 6.3895 7.0786 6.77512 7.25283 7.12358C7.42705 7.47203 7.68348 7.77283 7.99998 8M4 11H20C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12V12.5C21 14 18.483 18.073 17 19V20C17 20.2652 16.8946 20.5196 16.7071 20.7071C16.5196 20.8946 16.2652 21 16 21H8C7.73478 21 7.48043 20.8946 7.29289 20.7071C7.10536 20.5196 7 20.2652 7 20V19C5.313 17.946 3 14 3 12.5V12C3 11.7348 3.10536 11.4804 3.29289 11.2929C3.48043 11.1054 3.73478 11 4 11Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            {/* Suggested Recipes Title */}
            <div className={styles.text}>Suggested Recipes</div>

            {/* Recipe Name and Likes */}
            <div className={styles.description}>
                <div>{recipeName}</div>
                <div className={styles.additionalText}>
                    {likes !== null ? `Spoonacular AI Likes: ${likes}` : "Loading likes..."}
                </div>
            </div>
        </div>
    );
}
