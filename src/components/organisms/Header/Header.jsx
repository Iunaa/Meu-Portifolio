import React from 'react';
import styles from "../Header/header.module.scss";
import Group from "../../../assets/Group.png";
import Eu from "../../../assets/eu.png";
import Lines from "../../../assets/lines.png";
import Oval from "../../../assets/Oval.png";



export const Header = () => {
  return (
    <>
     <div className={styles.header}>
        <div className={styles.header__container}>
        <h1 className={styles.header__container__title}>IunaLeon</h1>
        <img className={styles.header__container__group} src={Group}/>
         <img className={styles.header__container__img} src={Eu}/>
        
        </div>
         <img className={styles.header__lines} src={Lines}/>
        <img className={styles.header__Oval} src={Oval}/>
        

     </div>
    </>
  )
}
