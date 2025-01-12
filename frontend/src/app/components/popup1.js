"use client";
import styles from "../styles/popup1.module.css";
import { useState } from "react";
import React from "react";

export default function popup1({onClose}) {
    

    return (
        <div className={styles.backdisplay}>
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
            <div className={styles.hold}>
            <h1 className={styles.title}>Add Fridge Item</h1>
            <form className={styles.form} action="/send-data-here" method="post">
            <label for="first">Item Name:</label>
            <input type="text" id="item-name" name="item-name" required/>
            <label for="last">Quantity:</label>
            <input type="text" id="quantity" name="quantity" required/>
            <label for="last">Date Added:</label>
            <input type="text" id="date-added" name="date-added" required/>
            <label for="last">Expiration Date:</label>
            <input type="text" id="expiration-date" name="expiration-date"/>
            <button className={styles.close} onClick={onClose} type="add">Add</button>
            </form>
            </div>
        </div>
    );
}
