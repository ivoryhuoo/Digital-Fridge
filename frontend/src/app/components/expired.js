import styles from "../styles/expired.module.css";

export default function Expired() {
    // Example: Array of items to populate the frame
    const items = Array.from({ length: 30 }, (_, i) => `Scrollable Content Item ${i + 1}`);

    return (
        <div className={styles.frame}>
            <div className={styles.text}> Suggested Recipes</div>
            <svg
                className={styles.alert_icon}
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="40" 
                viewBox="0 0 23 20" 
                fill="none"
            >
            <path d="M11.4483 6.99947V10.9995M11.4483 14.9995H11.4583M9.68826 1.95647L1.26626 16.0165C1.09274 16.3172 1.00094 16.6581 1.00001 17.0052C0.999071 17.3524 1.08902 17.6938 1.26092 17.9954C1.43283 18.2971 1.68068 18.5484 1.97986 18.7246C2.27904 18.9007 2.61911 18.9955 2.96626 18.9995H19.8113C20.1584 18.9955 20.4985 18.9007 20.7977 18.7246C21.0968 18.5484 21.3447 18.2971 21.5166 17.9954C21.6885 17.6938 21.7785 17.3524 21.7775 17.0052C21.7766 16.6581 21.6848 16.3172 21.5113 16.0165L13.0883 1.95647C12.9109 1.66446 12.6613 1.42306 12.3636 1.25553C12.0658 1.088 11.7299 1 11.3883 1C11.0466 1 10.7107 1.088 10.413 1.25553C10.1152 1.42306 9.86562 1.66446 9.68826 1.95647Z" 
                stroke="#D42C2E" 
                stroke-width="3" 
                stroke-linecap="round" 
                stroke-linejoin="round"/>
            </svg>

            <div className={styles.scroll}>
                {items.map((item, index) => (
                    <p key={index} style={{ margin: "5px 0", color: "#fff" }}>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
}