"use client";
import styles from "../styles/button1.module.css";
import { Button } from "react-bootstrap";
import { useState } from 'react';
import Popup1 from './popup1.js';
import Popup2 from './popup2.js'; 

function Button1() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(true);
    const handleClose = () => setClicked(false);

    return (
        <div>
            <Button className={styles.main} onClick={handleClick}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="51" viewBox="0 0 54 51" fill="none">
                        <ellipse cx="27" cy="25.5" rx="27" ry="25.5" fill="#D9D9D9" />
                    </svg>
                    <svg className={styles.add} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5V19M5 12H19" stroke="#354052" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <h1 className={styles.text}>Add Fridge Item</h1>
            </Button>
            {clicked && <Popup1 onClose={handleClose} />}
        </div>
    );
}

function Button2() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(true);
    const handleClose = () => setClicked(false);

    return (
        <div>
            <Button className={styles.main} onClick={handleClick}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="54" height="51" viewBox="0 0 54 51" fill="none">
                        <ellipse cx="27" cy="25.5" rx="27" ry="25.5" fill="#D9D9D9" />
                    </svg>
                    <svg className={styles.add} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"> 
                        <path d="M4.16101 15.009L16 15M10 1C11.918 1 13.52 2.35 13.91 4.151C14.9341 3.87385 16.0264 4.01488 16.9466 4.54308C17.8667 5.07128 18.5394 5.94337 18.8165 6.9675C19.0937 7.99163 18.9526 9.08392 18.4244 10.0041C17.8962 10.9242 17.0241 11.5968 16 11.874V19H4.00001V11.874C3.49291 11.7366 3.01783 11.5007 2.6019 11.1798C2.18597 10.8588 1.83733 10.4591 1.57588 10.0034C1.31444 9.54766 1.14532 9.04492 1.07816 8.52385C1.01101 8.00279 1.04715 7.4736 1.18451 6.9665C1.32187 6.4594 1.55777 5.98432 1.87874 5.56839C2.1997 5.15246 2.59945 4.80382 3.05515 4.54237C3.51086 4.28093 4.01359 4.1118 4.53466 4.04465C5.05572 3.9775 5.58491 4.01364 6.09201 4.151C6.28585 3.25857 6.77923 2.45933 7.49016 1.88611C8.20109 1.31289 9.08677 1.0002 10 1Z" stroke="#354052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h1 className={styles.text}>Generate Recipe</h1>
            </Button>
            {clicked && <Popup2 onClose={handleClose} />}
        </div>
    );
}

export default function ButtonsContainer() {
    return (
        <div className={styles.container}>
            <Button1 />
            <Button2 />
        </div>
    );
}