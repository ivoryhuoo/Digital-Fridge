"use client";
import Image from "next/image";
import React, { useState } from "react";
import GroceryList from './components/grocerylist.js';
import Fridge from './components/fridge.js';
import Expired from './components/expired.js';
import Recipe from './components/recipe.js';
import Button1 from './components/button1.js';
import './styles/globals.css'
// import styles from "./styles/page.css"

export default function Home() {
  const [state, setState] = useState("Initial State");

  const handleClick = (newState) => {
    setState(newState); // Update the shared state
  };

  return (
    <div className="box">
      <div className="logo-container">
        <Image
          src="/images/logo.png" // Adjust path based on logo location
          width={900} // Adjust width as needed
          height={900} // Adjust height as needed
        />
      </div>
      {/* <Button1 onClickChange={handleClick}/> */}
      <Button1/>
      <GroceryList/> 
      {/* <Fridge sharedState={state}/> */}
      <Fridge/>
      <Recipe/>
      <Expired/>
      <div className="social-container">
        <Image
          src="/images/social media.png" // Adjust path based on logo location
          width={400} // Adjust width as needed
          height={400} // Adjust height as needed
        />
      </div>
    </div>
  );
}
