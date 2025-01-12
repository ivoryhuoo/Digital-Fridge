"use client";
import styles from "../styles/fridge.module.css";
import { useState } from 'react';
import { Tooltip } from "@nextui-org/react";
import { Button } from "react-bootstrap";

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
                    {!clicked && (<Tooltip content={<div className={styles.info}><div className={styles.words}><p>Item name: 1</p><p>Expires by date</p><p>Item added on date</p><Button onClick={handleClick}><p className={styles.delete}>X Remove item</p></Button></div></div>}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    </Tooltip>)}
                    {/* <Tooltip content={<div className={styles.info}><div className={styles.words}><p>Item name: 1</p><p>Expires by date</p><p>Item added on date</p><Button onClick={handleClick}><p className={styles.delete}>X Remove item</p></Button></div></div>}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="65" height="18" viewBox="0 0 65 18" fill="none">
                        <ellipse cx="32.5" cy="9" rx="32.5" ry="9" fill="#D9D9D9"/>
                    </svg>
                    </Tooltip> */}
                    {clicked && <p>Shared State: {sharedState}</p>}
                    {/* <Tooltip content="I am a tooltip">
                    <Button>Hover me</Button>
                    </Tooltip> */}
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