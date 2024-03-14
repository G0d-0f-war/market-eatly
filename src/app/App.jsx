import React from 'react';
import Menu from '../pages/Menu';
import './styles/style.scss';
import Home from '../pages/Home';
import { Routes, Route } from 'react-router';
import FoodCart from '../pages/FoodCart';
import ViewAll from '../pages/ViewAll';
import ViewAllDishes from '../pages/ViewAllDishes';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/foodcart' element={<FoodCart />}/>
        <Route path='/restaurants' element={<ViewAll />}></Route>
        <Route path='/dishes' element={<ViewAllDishes />}></Route>
      </Routes>
    </>
  );
}

export default App;
