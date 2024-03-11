import React, { useEffect, useState } from 'react';
import RestaurantsEnt from '../../../../entites/ui/SaleWeekend/Restaurants/RestaurantsEnt';
import styles from './Restaurants.module.scss';
import RestaurantsBlock from '../../../../entites/ui/SaleWeekend/Restaurants/RestaurantsBlock/RestaurantsBlock';

function Restaurants({ primal, variant }) {
  const [restaurents,setRestaurents] = useState([]);

  useEffect(() => { 
    fetch('https://65e5f152d7f0758a76e7cd26.mockapi.io/restaurants')
    .then(res => res.json())
    .then(data => setRestaurents(data))

  }, [])
  return (
    <div className="container">
      <RestaurantsEnt block={restaurents.map((items,index) =>  
       { if(index < 3) { 
          return <RestaurantsBlock key={items.id} restaurents={items}/>
        }}
      )} primal={primal} variant={variant} />
      <div className={styles.line}></div>
    </div>
  );
}

export default Restaurants;
