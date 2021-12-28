import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Editor from '../editor/editor';
import Fotter from '../footer/fotter';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService}) => {
    const [cards, setCards] = useState({
        '1': {
            id: '1',
            name: 'giyoung',
            company: '2i',
            theme: 'light',
            title: 'developer',
            email: 'rldudcjswp@naver.com',
            message: 'hard',
            fileName: '',
            fileURL: ''
        }, 
        '2': {
            id: '2',
            name: 'giyoung',
            company: 'samsung',
            theme: 'dark',
            title: 'developer',
            email: 'rldudcjswp@naver.com',
            message: 'hard',
            fileName: '',
            fileURL: ''
        },
        '3': {
            id: '3',
            name: 'giyoung',
            company: 'naver',
            theme: 'colorful',
            title: 'developer',
            email: 'rldudcjswp@naver.com',
            message: 'hard',
            fileName: '',
            fileURL: ''
        }
    })
   
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

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated
        });
    }

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated
        });
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogOut}/>
            <div className={styles.container}>
                <Editor cards={cards} FileInput={FileInput} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>    
            </div>
            <Fotter/>
        </section>
    )
} 
export default Maker;