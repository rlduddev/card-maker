import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Fotter from '../footer/fotter';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const navigater = useNavigate();
    const onLogOut = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user) {
                navigater("/");
            }
        })
    })

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogOut}/>
            <Fotter/>
        </section>
    )
} 
export default Maker;