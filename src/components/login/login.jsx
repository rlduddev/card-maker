import React from 'react';
import Fotter from '../footer/fotter';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    const onLogin = (event) => {
        authService
            .login(event.currentTarget.textContent)
            .then(console.log)
    }
    return (
        <section className={styles.login}>
            <Header/>
            <section>
                <h1>login</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Google</button>
                    </li>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>GitHub</button>
                    </li>
                </ul>
            </section>
            <Fotter/>
        </section>
    )
}

export default Login;