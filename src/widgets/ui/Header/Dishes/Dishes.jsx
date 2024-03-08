import React from 'react';
import DishesEnt from '../../../../entites/ui/SaleWeekend/Dishes/DishesEnt';
import styles from './Dishes.module.scss';
function Dishes({primal, variant}) {
  return (
    <div className="container">
      <DishesEnt variant={variant} primal={primal}/>
      <div className={styles.line}></div>
    </div>
  );
}

export default Dishes;
