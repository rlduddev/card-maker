import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css'
const CardAddForm = ({FileInput, onAdd}) => {
    const [file, setFile] = useState({
        fileName: null,
        fileURL: null
    });

    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const formRef = useRef();
    
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(file);
        const card = {
            id: Date.now(),
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            theme: themeRef.current.value || '',
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        }
        formRef.current.reset();
        onAdd(card);
        setFile({
            fileName: null,
            fileURL: null
        })
    }

    const onFileChange = (file) => {
        setFile({
            fileName: file.name,
            fileURL: file.url
        })
    }

    return (
        <form ref={formRef} className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name" />
            <input ref={companyRef}className={styles.input} type="text" name="company" placeholder="Company" />
            <select ref={themeRef} className={styles.select}  name="theme" placeholder="Theme">
                <option value="dark">dark</option>
                <option value="light">light</option>
                <option value="colorful">colorFul</option>
            </select>
            <input ref={titleRef} className={styles.input}  type="text" name="title" placeholder="Title" />
            <input ref={emailRef} className={styles.input}  type="text" name="email" placeholder="Email" />
            <textarea ref={messageRef} className={styles.textarea}  name="message" placeholder="Message" />
            <div className={styles.fileInput}>
                <FileInput name={file.fileName} onFileChange={onFileChange}/>
            </div>
            <Button name="Add" onClick={onSubmit}/>
            
        </form>
    )
}

export default CardAddForm;