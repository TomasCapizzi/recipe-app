import React,{useEffect, useState} from 'react';

import { Meal } from '../Interfaces/Meal';
import PreviewCat from '../Components/PreviewCat';
import Spinner from '../Components/Spinner/Spinner';
import { useParams } from 'react-router';

//import useSearchMeal from '../Hooks/useSearchMeal';

//import SearchResult from '../Components/SearchResult';

export default function Categories(){
    const url: string = 'https://www.themealdb.com/api/json/v1/1';

    const {cat} = useParams();
    const [meals, setMeals] = useState<Meal[]>();

    async function getCategoryMeals(){
        const respuesta = await fetch(url + '/filter.php?c=' + cat)
        const res = await respuesta.json();
        setMeals(res.meals);
    }

    useEffect(()=>{
        setMeals([])
        getCategoryMeals()
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cat])

    return (
        <div className='category-container'>
            <h3>{cat}</h3>
            {
                meals ? meals.map(meal=> <PreviewCat meal={meal} key={meal.idMeal}/>) : <Spinner/>
            }
        </div>
    )
}