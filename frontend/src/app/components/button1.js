"use client";
import styles from "../styles/button1.module.css";
import { Button } from "react-bootstrap";
import { useState } from 'react';

export default function button1() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(true);
        // Additional logic can go here (e.g., showing a modal, adding an item, etc.)
    }
    return (
        <div>
            <Button className={styles.main} onClick={handleClick}>
            <div className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="51" viewBox="0 0 54 51" fill="none">
                <ellipse cx="27" cy="25.5" rx="27" ry="25.5" fill="#D9D9D9"/>
            </svg>
            <svg className={styles.add} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19M5 12H19" stroke="#354052" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
        
                <h1 className={styles.text}>Add Fridge Item</h1>
            </Button>
            {clicked && <p>Button was clicked!</p>}
        </div>
    )
}