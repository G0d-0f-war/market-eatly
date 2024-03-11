import React from 'react';
import styles from './RestaurantsBlock.module.scss';
import Favorites from '../../../../../shared/ui/Favorites/Favorites';
import img from '../../../../../app/assets/img/restaurants/chicken.png';
import star from '../../../../../app/assets/img/restaurants/Star.svg';
function RestaurantsBlock({}) {
  return (
    <div className={styles.block}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.items}>
        <div className={styles.category}>
          <p>Healthy</p>
        </div>
        <div className={styles.items__title}>The Chicken King</div>
        <div className={styles.elements}>
          <div className={styles.wrapper}>
            <div className={styles.information}>
              <div className={styles.time}>24min •</div>
              <div className={styles.raiting}>
                <img src={star} alt="" />
                <div className={styles.raiting__text}>4.8</div>
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
