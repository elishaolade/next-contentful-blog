import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.section}>Elisha Olade</div>
                <div className={styles.section}></div>
                <div className={styles.section}></div>
            </div>
            </div>
        </div>
    )
}

export default Header;