import styles from './CardEnt.module.scss';
import food from '../../../../../app/assets/img/dishes/food.png';
import star from '../../../../ui/../../app/assets/img/dishes/Star.svg'
export default function CartEnt ({children,dishes, ...props}) { 

    return ( 
    
    <div className={styles.block}>
        <div className={styles.obertka}>
          <div className={styles.image}>
            <img src={dishes.imgUrl} width='205' height='210' alt="" />
          </div>
          <div className={styles.items}>
            <div className={styles.category}>
              <p>{dishes.category}</p>
            </div>
            <div className={styles.items__title}>{dishes.title}</div>
            <div className={styles.elements}>
              <div className={styles.wrapper}>
                <div className={styles.information}>
                  <div className={styles.time}>{dishes.time}min •</div>
                  <div className={styles.raiting}>
                    <img src={star} alt="" />
                    <div className={styles.raiting__text}>{dishes.raiting}</div>
                  </div>
                </div>
                <div className={styles.price}>
                  <div className={styles.price__text}>
                    ${dishes.price} <span>.99</span>
                  </div>
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}