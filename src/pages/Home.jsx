import React from 'react';
import Header from '../widgets/ui/Header/Header';
import Hero from '../widgets/ui/Header/Hero/Hero';
import Statistics from '../widgets/ui/Header/Statistics/Statistics';

function Home(props) {
  return (
    <div>
      <Header />
      <Hero />
      <Statistics />
    </div>
  );
}

export default Home;
