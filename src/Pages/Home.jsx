import React,{useEffect, useState} from 'react';

import FavMealsList from '../Components/FavMealsList';
import RandomMeal from '../Components/RandomMeal';
import SearchResult from '../Components/SearchResult';
import Spinner from '../Components/Spinner/Spinner';
import useRandomMeal from '../Hooks/useRandomMeal';
import useSearchMeal from '../Hooks/useSearchMeal';

function Home({handlerSearch, searchResult, setHandlerSearch, setSearchResult}) {
    
    const [random, setRandom] = useState();


    const {randomMeal} = useRandomMeal({setRandom})
  
    useEffect(()=>{
      randomMeal();
    },[]) 

  return (
    <div className='home-container'>
        <FavMealsList/>
        { random ?
          <RandomMeal random={random} randomMeal={randomMeal}/> : <Spinner/>
        }
    </div>
  )
}

export default Home