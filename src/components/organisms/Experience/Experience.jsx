import React from 'react'
import styles from "../Experience/experience.module.scss";
import Line2 from "../../../assets/line2.png";

export const Experience = () => {
  return (
    <>
    <div className={styles.experience}>
        <p className={styles.experience__title}>HTML</p>
        <p className={styles.experience__time}>4 Years Experience</p>

    
        <p className={styles.experience__title}>CSS</p>
        <p className={styles.experience__time}>4 Years Experience</p>
    
    
        <p className={styles.experience__title}>Javascript</p>
        <p className={styles.experience__time}>4 Years Experience</p>
    
    
        <p className={styles.experience__title}>Accessibility</p>
        <p className={styles.experience__time}>4 Years Experience</p>
    
    
        <p className={styles.experience__title}>React</p>
        <p className={styles.experience__time}>3 Years Experience</p>
    
    
        <p className={styles.experience__title}>Sass</p>
        <p className={styles.experience__time}>3 Years Experience</p>
     
    </div>
   
    <img className={styles.Line2} src={Line2}/>
    
    </>
  )
}
