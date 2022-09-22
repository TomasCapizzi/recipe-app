import './Styles/main.scss'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Category from './Pages/Category'
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
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/meal/:id'>
            <MealDetail/>
          </Route>
          <Route path='/category/:cat'>
            <Category/>
          </Route>
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    </FavContextProvider>
  );
}

export default App;
