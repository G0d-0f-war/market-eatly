import React, { useEffect, useState } from 'react';
import RestaurantsEnt from '../../../../entites/ui/SaleWeekend/Restaurants/RestaurantsEnt';
import styles from './Restaurants.module.scss';
import RestaurantsBlock from '../../../../entites/ui/SaleWeekend/Restaurants/RestaurantsBlock/RestaurantsBlock';

function Restaurants({ primal, variant,viewAll }) {
  const [restaurents,setRestaurents] = useState([]);

  useEffect(() => { 
    fetch('https://65e5f152d7f0758a76e7cd26.mockapi.io/restaurants')
    .then(res => res.json())
    .then(data => setRestaurents(data))

  }, [])
  return (
    <div className="container">
      <RestaurantsEnt block={restaurents.map((items,index) =>  


        viewAll ? <RestaurantsBlock key={items.id} restaurents={items} />

        : index < 3 ? <RestaurantsBlock key={items.id} restaurents={items} /> 
        
        : false
          
      )} primal={primal} variant={variant} />
      <div className={styles.line}></div>
    </div>
  );
}

export default Restaurants;
