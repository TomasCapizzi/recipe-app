import './Styles/main.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Category from './Pages/Category';
import { FavContextProvider } from './Context/FavContext';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import MealDetail from './Pages/MealDetail';
import MenuCategories from './Components/MenuCategories';
import Navbar from './Components/Navbar';
import React from 'react';

function App() { 

  return (
    <FavContextProvider>
      <BrowserRouter>
        <div className='app'>
          <Navbar />
          <MenuCategories/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/meal/:id' element={<MealDetail/>}/>
            <Route path='/category/:cat' element={<Category/>} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </FavContextProvider>
  );
}

export default App;
