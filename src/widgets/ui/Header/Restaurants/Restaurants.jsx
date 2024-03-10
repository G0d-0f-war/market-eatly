import React, { useEffect, useState } from 'react';
import RestaurantsEnt from '../../../../entites/ui/SaleWeekend/Restaurants/RestaurantsEnt';
import styles from './Restaurants.module.scss';

function Restaurants({ primal, variant }) {
  return (
    <div className="container">
      <RestaurantsEnt primal={primal} variant={variant} />
      <div className={styles.line}></div>
    </div>
  );
}

export default Restaurants;
