import React from 'react';
import styles from './RestaurantsBlock.module.scss';
import Favorites from '../../../../../shared/ui/Favorites/Favorites';
import star from '../../../../../app/assets/img/restaurants/Star.svg';
function RestaurantsBlock({restaurents, ...props}) {
  
  const supreme = restaurents.category === 'Supreme' ? styles.supreme : '';
  const health = restaurents.category === 'Healthy' ? styles.health : '';
  const tranding = restaurents.category === 'Tranding' ? styles.tranding: '';
  const hot = restaurents.category == 'Hot' ? styles.hot : '';

  return (
    <div className={styles.block}>
      <div className={styles.image}>
        <img key={restaurents.id} width='395' height='175' src={restaurents.imgUrl} alt="" />
      </div>
      <div className={styles.items}>
        <div className={`${supreme} ${health} ${tranding} ${hot}`}>
          <p>{restaurents.category}</p>
        </div>
        <div className={styles.items__title}>{restaurents.title}</div>
        <div className={styles.elements}>
          <div className={styles.wrapper}>
            <div className={styles.information}>
              <div className={styles.time}>{restaurents.time}min •</div>
              <div className={styles.raiting}>
                <img src={star} alt="" />
                <div className={styles.raiting__text}>{restaurents.rating}</div>
              </div>
            </div>
          </div>
          <div className={styles.favorite}>
            <Favorites />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantsBlock;
