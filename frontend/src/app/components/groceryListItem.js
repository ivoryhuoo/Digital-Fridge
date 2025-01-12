import React, { useState } from "react";
import styles from "../styles/grocerylist.module.css";

export default function GroceryListItem({ cname, callback }) {
  const [isFilled, setIsFilled] = useState(false);
  const [text, setText] = useState(""); 

  const handleClick = () => {
    setIsFilled((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
    if (callback) callback(e.target.value);
  };

  return (
    <div className={`${styles.groceryItem} ${cname}`}>
      {/* SVG */}
      <div className={styles.checkboxContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          <g clipPath="url(#clip0_4_71)">
            <path
              d="M1.875 2.91667C1.875 2.60725 2.0067 2.3105 2.24112 2.09171C2.47554 1.87292 2.79348 1.75 3.125 1.75H11.875C12.2065 1.75 12.5245 1.87292 12.7589 2.09171C12.9933 2.3105 13.125 2.60725 13.125 2.91667V11.0833C13.125 11.3928 12.9933 11.6895 12.7589 11.9083C12.5245 12.1271 12.2065 12.25 11.875 12.25H3.125C2.79348 12.25 2.47554 12.1271 2.24112 11.9083C2.0067 11.6895 1.875 11.3928 1.875 11.0833V2.91667Z"
              stroke={isFilled ? "white" : "#E8ECF2"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={isFilled ? "white" : "none"}
            />
          </g>
          <defs>
            <clipPath id="clip0_4_71">
              <rect width="15" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Enter item"
          style={{
            width: "550%",
            padding: "3px",
            fontSize: "12px",
            textDecoration: isFilled ? "line-through" : "none",
            color: isFilled ? "gray" : "black",
            border: "1px solid #ccc",
            borderRadius: "2px",
          }}
        />
      </div>
    </div>
  );
}

GroceryListItem.defaultProps = {
  cname: "",
  callback: () => {}, // Default no-op callback
};
