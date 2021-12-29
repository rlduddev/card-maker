import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Editor from '../editor/editor';
import Fotter from '../footer/fotter';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService, cardRepository}) => {
    const historyState = useLocation().state;
    console.log(historyState);
    const [userId, setUserId] = useState(historyState && historyState.userId);
    const [cards, setCards] = useState({});
   
    const navigater = useNavigate();
    
    const onLogOut = useCallback(() => {
        authService.logout();
    }, [authService]);

    useEffect(() => {
        if(!userId) {
            return;
        }

        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        });

        return () => {
            stopSync();
        }
    }, [userId, cardRepository]);

    useEffect(() => {
        authService.onAuthChange(user => {
            console.log(user);
            if(user) {
                setUserId(user.uid);
            } else {
                navigater("/");
            }
        })
    }, [userId, historyState, authService])

    const createOrUpdateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated
        });
        cardRepository.saveCard(userId, card);
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