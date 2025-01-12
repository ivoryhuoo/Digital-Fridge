"use client";
import styles from "../styles/fridge.module.css";
import { useState } from 'react';
import {Tooltip, Button} from "@nextui-org/react";

export default function fridge() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(true);
        // Additional logic can go here (e.g., showing a modal, adding an item, etc.)
    }
    return (
        <div className={styles.frame}>
            <div className={styles.lining}>
               
                <div className={styles.shadows}>
                    <div className={styles.empties}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <Tooltip content="I am a tooltip">
                    <Button>Hover me</Button>
                    </Tooltip>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    </div>
                    <div className={styles.shelves}>
                        
                    </div>
                </div>
                <div className={styles.shadows}>
                <div className={styles.empties}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    </div>
                    <div className={styles.shelves}>
                
                    </div> 
                </div>
                <div className={styles.shadows}>
                <div className={styles.empties}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    </div>
                    <div className={styles.shelves}>
                
                    </div>
                </div>
                <div className={styles.shadows}>
                <div className={styles.empties}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    </div>
                    <div className={styles.shelves}>
                
                    </div>
                </div>
                <div className={styles.shadows}>
                <div className={styles.empties}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    </div>
                    <div className={styles.shelves}>
                
                    </div>
                </div>
            </div>
        </div>
    )
}