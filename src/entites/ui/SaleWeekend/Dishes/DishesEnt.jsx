import React from 'react';
import styles from './DishesEnt.module.scss';
import star from '../../../../app/assets/img/dishes/Star.svg';
import food from '../../../../app/assets/img/dishes/food.png';
import AddCartButton from '../../../../features/ui/Navigation/AddCartButton/AddCartButton';
function DishesEnt(props) {
  return (
    <div className={styles.dishes}>
      <div className={styles.title}>
        Our Top <span>Dishes</span>
      </div>

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
                  <AddCartButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.view}>
        <div className={styles.view__items}>
          <a href="">View All</a>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 9.90234H17.8041"
              stroke="#ACADB9"
              stroke-width="2.25773"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.90234 2L17.8044 9.90206L9.90234 17.8041"
              stroke="#ACADB9"
              stroke-width="2.25773"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default DishesEnt;
