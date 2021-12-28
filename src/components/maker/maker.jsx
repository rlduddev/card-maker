import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Editor from '../editor/editor';
import Fotter from '../footer/fotter';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCard] = useState([
        {
            id: '1',
            name: 'giyoung',
            company: '2i',
            theme: 'light',
            title: 'developer',
            email: 'rldudcjswp@naver.com',
            message: 'hard',
            fileName: 'giyoung',
            fileURL: 'giyoung.png'
        },
        {
            id: '2',
            name: 'giyoung',
            company: 'samsung',
            theme: 'dark',
            title: 'developer',
            email: 'rldudcjswp@naver.com',
            message: 'hard',
            fileName: 'giyoung',
            fileURL: 'giyoung.png'
        },
        {
            id: '3',
            name: 'giyoung',
            company: 'naver',
            theme: 'colorful',
            title: 'developer',
            email: 'rldudcjswp@naver.com',
            message: 'hard',
            fileName: 'giyoung',
            fileURL: 'giyoung.png'
        }, 
    ]);

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
            <div className={styles.container}>
                <Editor cards={cards}/>
                <Preview cards={cards}/>    
            </div>
            <Fotter/>
        </section>
    )
} 
export default Maker;