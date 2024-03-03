import React from 'react';
import Button from '../../../../shared/ui/Button/Button';
import styles from './HeroEnt.module.scss';
import stars from '../../../../app/assets/img/hero/Star.svg';
import pilot from '../../../../app/assets/img/hero/trustpilot.svg';
import food from '../../../../app/assets/img/hero/Food2.png';

function HeroEnt(props) {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.items}>
          <div className={styles.users}>Over 1000</div>
          <div className={styles.title}>
            Enjoy Foods All Over The <span>World</span>
          </div>
          <div className={styles.text}>
            EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more
            details and get paychecks up to two days early. Get a $20 bonus.
          </div>
          <div className={styles.buttons}>
            <Button>Get Started</Button>
            <Button primal="primal">Go Pro</Button>
          </div>
          <div className={styles.raiting}>
            <div className={styles.trustpilot}>
              <img src={pilot} alt="" />
            </div>
            <div className={styles.stars}>
              <img src={stars} alt="" />
              <span>4900+</span>
            </div>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.food}>
            <img src={food} alt="" />
            <div className={styles.waves}>
              <svg
                width="42"
                height="28"
                viewBox="0 0 42 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.03562 12.8839C6.63998 9.20371 11.0587 8.59002 15.5406 8.17742C21.1348 7.66242 26.8271 7.46063 31.1569 1.99998"
                  stroke="#685BB8"
                  stroke-width="2.65"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.63661 23.2285C4.92103 18.5553 9.69807 15.7937 15.3404 15.1712C18.2926 14.8456 21.2864 15.1697 24.22 14.6123C30.8291 13.356 36.9687 9.34402 39.8474 3.13949"
                  stroke="#685BB8"
                  stroke-width="2.65"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.5218 19.2191C28.3334 20.6222 25.9587 21.6906 23.3509 21.9971C18.1575 22.6072 12.7177 21.7974 8.77443 25.9997"
                  stroke="#685BB8"
                  stroke-width="2.65"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={styles.lines}>
              <svg
                width="39"
                height="37"
                viewBox="0 0 39 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27.3376 31.1198C30.2316 24.6503 32.3782 17.9383 34.9719 11.3638"
                  stroke="#685BB8"
                  stroke-width="2.65"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.92894 35.0005C15.8316 26.5431 22.9341 17.0933 29.461 7.55682"
                  stroke="#685BB8"
                  stroke-width="2.65"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.63457 15.8358C9.15324 13.2755 18.5471 6.43167 25.4724 1.99974"
                  stroke="#685BB8"
                  stroke-width="2.65"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className={styles.vector}>
              <svg
                width="101"
                height="98"
                viewBox="0 0 101 98"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M71.6674 10.7111C80.803 24.3855 86.0196 40.0142 80.7461 55.9952C75.9861 70.42 63.0132 78.9641 48.1158 68.2622C41.0635 63.1962 36.4872 52.9723 41.0691 45.3764C46.1738 36.9138 57.5029 44.4112 60.5762 50.1704C67.7546 63.6215 63.1038 81.7597 47.3119 89.9534C28.6107 99.6567 20.562 81.1081 20.7098 81.1037"
                  stroke="#665AB5"
                  stroke-width="2.65"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M91.0256 14.5963C89.1011 14.9712 87.2152 14.5933 85.3117 14.3026C79.0611 13.3488 72.67 10.5339 68.7869 5.89197C71.0236 11.8454 71.6846 20.2492 66.9237 25.2906"
                  stroke="#665AB5"
                  stroke-width="2.65"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroEnt;
