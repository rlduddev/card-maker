import React, { memo } from 'react';
import styles from './fotter.module.css'

const Fotter = memo((props) => (
    <footer className={styles.footer}>
        <p className={styles.title}>Code Your Dream</p>
    </footer>
))

export default Fotter;