import React from 'react'
import styles from "../Introduction/introduction.module.scss";


export const Introduction = () => {
  return (
    <>
     <div className={styles.Introduction}>
        <h1 className={styles.Introduction__title}>Nice to meet you! I’m <u>Iuna de Leon</u>.</h1>
        <p className={styles.Introduction__paragraph}>Based in the BR, I’m a front-end developer passionate about building accessible web apps that users love.</p>
        <a className={styles.Introduction__anchor}>contact me</a>
        
     </div>

    </>
   
    
  )
}
