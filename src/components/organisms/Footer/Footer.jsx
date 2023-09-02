import React from 'react'
import styles from "../Footer/footer.module.scss";
import Group from "../../../assets/Group.png";

export const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
        <div className={styles.footer__Container}>
            <h1 className={styles.footer__Container__title}>IunaLeon</h1>
            <img className={styles.footer__Container__group} src={Group}/>
        </div>
    </div>
    </>
  )
}