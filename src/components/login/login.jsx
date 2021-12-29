import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Fotter from '../footer/fotter';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    const navigate = useNavigate();

    const goToMaker = (userId) => {
        navigate('/maker', {
            state: {
                userId: userId,
            }
        });
    }
    const onLogin = (event) => {
        authService
            .login(event.currentTarget.textContent)
            .then(data => {goToMaker(data.user.uid)})
    }

    useEffect(() => {
        authService
            .onAuthChange(user => {
                user && goToMaker(user);
            });
    });


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