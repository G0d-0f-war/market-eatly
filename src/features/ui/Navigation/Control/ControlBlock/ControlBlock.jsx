import React from 'react';
import styles from './ControlBlock.module.scss';
import food from '../../../../../app/assets/img/control/food.png';
function ControlBlock(props) {
  return (
    <div className={styles.block}>
      <div className={styles.items}>
        <div className={styles.img}>
          <img src={food} alt="" />
        </div>
        <div className={styles.information}>
          <div className={styles.title}>Chicken Hell</div>
          <div className={styles.text}>On The Way</div>
        </div>
      </div>
      <div className={styles.time}>
        <p>3:09 PM</p>
      </div>
    </div>
  );
}

export default ControlBlock;
