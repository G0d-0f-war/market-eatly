import React from 'react';
import Header from '../widgets/ui/Header/Header';
import Hero from '../widgets/ui/Header/Hero/Hero';
import Statistics from '../widgets/ui/Header/Statistics/Statistics';
import Quality from '../widgets/ui/Header/Quality/Quality';
import Restaurants from '../widgets/ui/Header/Restaurants/Restaurants';
import Dishes from '../widgets/ui/Header/Dishes/Dishes';
import Footer from '../widgets/ui/Header/Footer/Footer';

function Home(props) {
  return (
    <div>
      <Header />
      <Hero />
      <Statistics />
      <Quality />
      <Restaurants variant={1}/>
      <Dishes variant={1}/>
      <Footer />
    </div>
  );
}

export default Home;
