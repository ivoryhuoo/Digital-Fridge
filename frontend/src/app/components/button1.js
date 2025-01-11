import styles from "../styles/button1.module.css";
import { Button } from "react-bootstrap";

export default function button1() {
    return (
        <div>
            <Button className={styles.main}>
                hello
            </Button>
        </div>
    )
}