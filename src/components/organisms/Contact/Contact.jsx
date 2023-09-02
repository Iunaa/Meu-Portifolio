import React from 'react';
import styles from "./contact.module.scss";
import line3 from "../../../assets/line3.png";

export const Contact = () => {
  return (
    <>
    <div className={styles.Contact}>
        <h1 className={styles.Contact__title}>Contact</h1>
        <p className={styles.Contact__paragraph}>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
    </div>

    <div className={styles.Contact__data}>
        <div className={styles.Contact__data__container}>
            <p className={styles.Contact__data__container__name}>NAME</p>
            <p className={styles.Contact__data__container__email}>EMAIL</p>
            <p className={styles.Contact__data__container__message}>MESSAGE</p>
            <img className={styles.Contact__data__line3} src={line3}/>
        </div>

    <a className={styles.Contact__anchor}>SEND MESSAGE</a>

    </div>
    </>
  )
}
