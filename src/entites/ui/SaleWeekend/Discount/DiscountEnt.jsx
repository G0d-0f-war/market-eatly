import React from 'react';
import styles from './DiscountEnt.module.scss';
import food from '../../../../app/assets/img/sale/Food Image.png';
import food1 from '../../../../app/assets/img/block/food1.png';
import food2 from '../../../../app/assets/img/block/food2.png';
function DiscountEnt({ children, ...props }) {
  return (
    <div className={styles.block}>
      <div className={styles.items}>
        <div className={styles.title}>GET 50%</div>
        {children}
      </div>
      <div className={styles.img}>
        <img src={food} alt="" />
      </div>
      <div className={styles.foods}>
        <img src={food1} alt="" />
      </div>
      <div className={styles.foods1}>
        <img src={food2} alt="" />
      </div>
    </div>
  );
}

export default DiscountEnt;
