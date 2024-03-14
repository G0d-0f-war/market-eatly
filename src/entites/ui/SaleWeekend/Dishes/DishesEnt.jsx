import React from 'react';
import styles from './DishesEnt.module.scss';
import { Link } from 'react-router-dom';
function DishesEnt({ primal, card, variant, buttonViewAll  }) {
  return (
    <div className={styles.dishes}>
      {variant == 1 ? (
        <div className={styles.title}>
          Our Top <span>Dishes</span>
        </div>
      ) : (
        <div className={styles.MenuDishes}>
          <div className={styles.wrapper2}>
            <div className={styles.primal}>
              Our Top <span>Dishes</span>
            </div>



          {buttonViewAll && (

            <div className={styles.view}>
              <div className={styles.view__items}>
                <Link to='/dishes'>View All</Link>
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

          )}


          </div>
        </div>
      )}
      <div className={styles.content}>
      {card}
      </div>

      {variant == 1 ? (
        <div className={styles.view}>
          <div className={styles.view__items}>
            <Link to='/dishes'>View All</Link>
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
      ) : (
        false
      )}
    </div>
  );
}

export default DishesEnt;
