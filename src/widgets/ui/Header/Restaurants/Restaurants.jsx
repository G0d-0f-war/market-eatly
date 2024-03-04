import React from 'react';
import RestaurantsEnt from '../../../../entites/ui/SaleWeekend/Restaurants/RestaurantsEnt';
import styles from './Restaurants.module.scss';
function Restaurants(props) {
  return (
    <div className="container">
      <RestaurantsEnt />
      <div className={styles.line}></div>
    </div>
  );
}

export default Restaurants;
