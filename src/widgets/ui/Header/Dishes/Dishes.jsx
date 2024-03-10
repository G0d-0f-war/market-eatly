import React from 'react';
import DishesEnt from '../../../../entites/ui/SaleWeekend/Dishes/DishesEnt';
import CardEnt from '../../../../entites/ui/SaleWeekend/Food/Card/CardEnt';
import styles from './Dishes.module.scss';
import AddCartButton from '../../../../features/ui/Navigation/AddCartButton/AddCartButton';
function Dishes({ primal, variant }) {
  return (
    <div className="container">
      <DishesEnt
        card={
          <CardEnt>
            <AddCartButton />
          </CardEnt>
        }
        variant={variant}
        primal={primal}
      />
      <div className={styles.line}></div>
    </div>
  );
}

export default Dishes;
