import React,{useEffect, useState} from 'react';

import FavMealsList from '../Components/FavMealsList';
import { Meal } from '../Interfaces/Meal';
import RandomMeal from '../Components/RandomMeal';
import Spinner from '../Components/Spinner/Spinner';
import useRandomMeal from '../Hooks/useRandomMeal';

function Home() {
    
    const [random, setRandom] = useState<Meal[]>();


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