import React from 'react';
import DishesEnt from '../../../../entites/ui/SaleWeekend/Dishes/DishesEnt';
import styles from './Dishes.module.scss';
function Dishes(props) {
  return (
    <div className="container">
      <DishesEnt />
      <div className={styles.line}></div>
    </div>
  );
}

export default Dishes;
