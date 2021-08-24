import React,{useState,useEffect,useContext} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Styles/main.scss'
import FavMealsList from './Components/FavMealsList';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import RandomMeal from './Components/RandomMeal';
import Meal from './Components/Meal';
import { FavContextProvider } from './Context/FavContext';
import MenuCategories from './Components/MenuCategories';
import Category from './Components/Category'
import Spinner from './Components/Spinner/Spinner';


function App() { 

  const url = 'https://www.themealdb.com/api/json/v1/1';
  const [random, setRandom] = useState();


  async function randomMeal(){
    const respuesta = await fetch(url + '/random.php');
    const res = await respuesta.json();    
    setRandom(res.meals)
  }

  useEffect(()=>{
    randomMeal();
  },[]) 


  return (
    <FavContextProvider>
    <BrowserRouter>
    <div className='app'>
    <Navbar/>
    <MenuCategories/>
    <Switch>
      <Route exact path='/'>
        <FavMealsList/>
        { random ?
          <RandomMeal random={random} randomMeal={randomMeal}/> : <><Spinner/></>
        }
      </Route>
      <Route path='/meal/:id'>
      { random &&
          <Meal url={url}/>
        }
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
