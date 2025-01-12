import { Button } from "@nextui-org/react";
import styles from "../styles/grocerylist.module.css";
import GroceryListItem from "./groceryListItem";



export default function grocerylist() {
   return ( 
        <div className={styles.container}>
            <div className={styles.frame}>
                <div className={styles.text}>Checklist</div>
            </div>

            <div className={styles.lining}>

            </div>

            <div className={styles.lining2}>
                
            </div>
            


            <GroceryListItem cname={styles.checkbox1} callback={(val) => console.log(val)}/> 
            <GroceryListItem cname={styles.checkbox2}/>
            <GroceryListItem cname={styles.checkbox3}/>
            <GroceryListItem cname={styles.checkbox4}/>
            <GroceryListItem cname={styles.checkbox5}/>
            <GroceryListItem cname={styles.checkbox6}/>
            <GroceryListItem cname={styles.checkbox7}/>
            <GroceryListItem cname={styles.checkbox8}/>
            <GroceryListItem cname={styles.checkbox9}/>

        </div>
    );
}