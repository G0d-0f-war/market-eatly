import React from 'react';
import Header from '../widgets/ui/Header/Header';
import Bigking from '../widgets/ui/Header/BigKing/bigKing';
import Card from '../widgets/ui/Header/Card/Card';
import Footer from '../widgets/ui/Header/Footer/Footer';
import Questions from '../widgets/ui/Header/Questions/Questions'
import Line from '../shared/ui/Line/Line';
export default function FoodCart () { 
    return (
        <>
        <Header />
        <Bigking />
        <Card title='Popular 🔥'/>
        <Card title='Chicken Vegetables' />
        <Line />
        <Questions />
        <Footer />
        </>
    )
};
