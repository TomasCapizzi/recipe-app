import React,{useState,useEffect} from 'react';
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
import SearchResult from './Components/SearchResult';


function App() { 

  const url = 'https://www.themealdb.com/api/json/v1/1';
  const [random, setRandom] = useState();
  const [searchResult, setSearchResult] = useState();
  const [handlerSearch, setHandlerSearch] = useState(false);



  async function randomMeal(){
    const respuesta = await fetch(url + '/random.php');
    const res = await respuesta.json();    
    setRandom(res.meals)
  }
  async function search(term){
    const respuesta = await fetch(url + '/search.php?s=' + term);
    const res = await respuesta.json();
    const food = res.meals;
    setSearchResult(food);
    setHandlerSearch(true);   
}


  useEffect(()=>{
    randomMeal();
  },[]) 


  return (
    <FavContextProvider>
    <BrowserRouter>
    <div className='app'>
    <Navbar search={search}/>
    <MenuCategories/>
    <Switch>
      <Route exact path='/'>
        <FavMealsList/>
        { random ?
          <RandomMeal random={random} randomMeal={randomMeal}/> : <><Spinner/></>
        }
        { handlerSearch ?
            <SearchResult result={searchResult} setHandlerSearch={setHandlerSearch} setSearchResult={setSearchResult}/> : <></>
        }
      </Route>
      <Route path='/meal/:id'>
      { random &&
          <Meal url={url}/>
        }
      { handlerSearch ?
            <SearchResult result={searchResult} setHandlerSearch={setHandlerSearch} setSearchResult={setSearchResult}/> : <></>
        }
      </Route>
      <Route path='/category/:cat'>
        <Category/>
        { handlerSearch ?
            <SearchResult result={searchResult} setHandlerSearch={setHandlerSearch} setSearchResult={setSearchResult}/> : <></>
        }
      </Route>

    </Switch>

    <Footer/>
    </div>
    </BrowserRouter>
    </FavContextProvider>
  );
}

export default App;
