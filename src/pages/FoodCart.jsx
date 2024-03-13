import React from 'react';
import Header from '../widgets/ui/Header/Header';
import Bigking from '../widgets/ui/Header/BigKing/bigKing';
import Footer from '../widgets/ui/Header/Footer/Footer';
import Questions from '../widgets/ui/Header/Questions/Questions';
import Line from '../shared/ui/Line/Line';
import Dishes from '../widgets/ui/Header/Dishes/Dishes';
export default function FoodCart() {
  return (
    <>
      <Header />
      <Bigking />
      <Dishes />
      <Dishes />
      <Questions />
      <Footer />
    </>
  );
}
