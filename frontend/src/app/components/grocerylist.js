import styles from "../styles/grocerylist.module.css";


// const grocerylist = () => {
//     return (
//         <div className={styles.block}>
            
//         </div>
//     )
// }

export default function grocerylist() {
    return (
        <div
            className={styles.frame}
            style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#ff0000",
            }}
        >
            Test
        </div>
    );
}