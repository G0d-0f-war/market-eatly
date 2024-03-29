import React from 'react';
import DishesEnt from '../../../../entites/ui/SaleWeekend/Dishes/DishesEnt';
import CardEnt from '../../../../entites/ui/SaleWeekend/Food/Card/CardEnt';
import styles from './Dishes.module.scss';
import AddCartButton from '../../../../features/ui/Navigation/AddCartButton/AddCartButton';
import { useEffect, useState } from 'react';
function Dishes({ primal, variant, viewAll }) {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    fetch('https://65e5f152d7f0758a76e7cd26.mockapi.io/dishes')
      .then((res) => res.json())
      .then((data) => setDishes(data));
  }, []);

  return (
    <div className="container">
      <DishesEnt
        card={dishes.map((items, index) => 

          viewAll ? <CardEnt dishes={items} key={items.id}> <AddCartButton /> </CardEnt>

          : index < 5 ? <CardEnt dishes={items} key={items.id}> <AddCartButton /> </CardEnt>

          :false
         )}
        variant={variant}
        primal={primal}
      />
      <div className={styles.line}></div>
    </div>
  );
}

export default Dishes;
