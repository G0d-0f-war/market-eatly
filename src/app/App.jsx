import React from 'react';
import Menu from '../pages/Menu';
import './styles/style.scss';
import Home from '../pages/Home';
import { Routes, Route } from 'react-router';
import FoodCart from '../pages/FoodCart';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path='/foodcart' element={<FoodCart />}/>
      </Routes>
    </>
  );
}

export default App;
