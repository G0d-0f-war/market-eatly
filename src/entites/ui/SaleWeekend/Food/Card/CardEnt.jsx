import styles from './CardEnt.module.scss';
import food from '../../../../../app/assets/img/dishes/food.png';
import star from '../../../../ui/../../app/assets/img/dishes/Star.svg'
export default function CartEnt ({children, ...props}) { 

    return ( 
    
    <div className={styles.block}>
        <div className={styles.obertka}>
          <div className={styles.image}>
            <img src={food} alt="" />
          </div>
          <div className={styles.items}>
            <div className={styles.category}>
              <p>Healthy</p>
            </div>
            <div className={styles.items__title}>Chicken Hell</div>
            <div className={styles.elements}>
              <div className={styles.wrapper}>
                <div className={styles.information}>
                  <div className={styles.time}>24min •</div>
                  <div className={styles.raiting}>
                    <img src={star} alt="" />
                    <div className={styles.raiting__text}>4.8</div>
                  </div>
                </div>
                <div className={styles.price}>
                  <div className={styles.price__text}>
                    $12 <span>.99</span>
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