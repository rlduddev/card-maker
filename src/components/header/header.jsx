import React from 'react';
import styles from './header.module.css'

const Header = ({onLogout}) => (
    <header className={styles.header}>
        {true && (
            <button className={styles.logout} onClick={onLogout}>LogOut</button>)
        }
        <img className={styles.logo} src="/images/logo.png" alt="logo"></img>
        <h1 className={styles.title}>Bussiness Card Maker</h1>
    </header>
    );

export default Header;