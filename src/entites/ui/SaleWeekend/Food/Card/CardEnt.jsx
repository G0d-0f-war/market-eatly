import styles from './CardEnt.module.scss';
import star from '../../../../ui/../../app/assets/img/dishes/Star.svg'
export default function CartEnt ({children,dishes, ...props}) { 
  const supreme = dishes.category === 'Supreme' ? styles.supreme : '';
  const health = dishes.category === 'Health' ? styles.health : '';
  const tranding = dishes.category === 'Tranding' ? styles.tranding: '';
  const hot = dishes.category === 'Hot' ? styles.hot: "";
  const fish = dishes.category === 'Fish' ? styles.fish: '';
  return ( 
    
    <div className={styles.block}>
        <div className={styles.obertka}>
          <div className={styles.image}>
            <img src={dishes.imgUrl} width='205' height='210' alt="" />
          </div>
          <div className={styles.items}>
            <div className={`${supreme} ${health} ${tranding} ${hot} ${fish}`}>
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