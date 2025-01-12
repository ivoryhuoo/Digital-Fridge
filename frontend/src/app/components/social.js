import styles from "../styles/social.module.css";

export default function Social() {
    return ( // Add 'return' here
        <div className={styles.imageContainer}>
            <img
                src="/images/social.png"
                width={350}
                height={350}
                className={styles.image}
            />
        </div>
    );
}
