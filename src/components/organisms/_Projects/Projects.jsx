import React from 'react'
import styles from "../_Projects/projects.module.scss";
import Bitmap from "../../../assets/Bitmap.png";
import Bitmap2 from "../../../assets/Bitmap2.png";
import Bitmap3 from "../../../assets/Bitmap3.png";
import Bitmap4 from "../../../assets/Bitmap4.png";
import Bitmap5 from "../../../assets/Bitmap5.png";
import Bitmap6 from "../../../assets/Bitmap6.png";
import { Text } from '../../molecules/Text/Text';
import { Text2 } from '../../molecules/Text2/Text2';



export const Projects = () => {
  return (
    <>
    <div className={styles.Container}>
    <div className={styles.Container__projects}>
        <h1 className={styles.Container__projects__title}>Projects</h1>
        <a className={styles.Container__projects__anchor}>CONTACT ME</a>
    </div>
    <div className={styles.Container__allCards}>
    <picture className={styles.Container__allCards__picture}>
      <img className={styles.Container__allCards__picture__img} src={Bitmap} />
    </picture>

    <div className={styles.Container__allCards__design}>
      <h2 className={styles.Container__allCards__design__subtitle}>DESIGN PORTFOLIO</h2>
      
      </div>
     
    <Text/>
    
    <div className={styles.Container__allCards__landing}>

     <picture className={styles.Container__allCards__picture}>
      <img className={styles.Container__allCards__picture__img} src={Bitmap2} />
     </picture>
     <div className={styles.Container__allCards__design}>
      <h2 className={styles.Container__allCards__design__subtitle}>E-LEARNING LANDING PAGE</h2>
    </div>
     <Text/>

     <picture className={styles.Container__picture}>
      <img className={styles.Container__allCards__picture__img} src={Bitmap3} />
     </picture>
     <div className={styles.Container__allCards__design}>
      <h2 className={styles.Container__allCards__design__subtitle}>TODO WEB APP</h2>
    </div>

    <Text2/>
    <picture className={styles.Container__allCards__picture}>
      <img className={styles.Container__allCards__picture__img} src={Bitmap4} />
     </picture>
     <div className={styles.Container__allCards__design}>
      <h2 className={styles.Container__allCards__design__subtitle}>ENTERTAINMENT WEB APP</h2>
      </div>
      <Text2/>

      <picture className={styles.Container__allCards__picture}>
      <img className={styles.Container__allCards__picture__img} src={Bitmap5} />
      </picture>

     <div className={styles.Container__design}>
      <h2 className={styles.Container__design__subtitle}>MEMORY GAME</h2>
      </div>
      <Text2/>
      <picture className={styles.Container__allCards__picture}>
      <img className={styles.Container__allCards__picture__img} src={Bitmap6} />
      </picture>

      <div className={styles.Container__allCards__design}>
      <h2 className={styles.Container__allCards__design__subtitle}>ART GALLERY SHOWCASE</h2>
      </div>
      <Text2/>
      </div>
      

    </div>

     </div>
    
    </>
  )
}
