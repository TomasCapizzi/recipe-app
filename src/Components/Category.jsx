import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router';
import PreviewCat from './PreviewCat';
import Spinner from './Spinner/Spinner'

export default function Categories(){
    const url = 'https://www.themealdb.com/api/json/v1/1';

    const {cat} = useParams();
    const [meals, setMeals] = useState();

    async function getCategoryMeals(){
        const respuesta = await fetch(url + '/filter.php?c=' + cat)
        const res = await respuesta.json();
        setMeals(res.meals);
    }

    useEffect(()=>{
        setMeals()
        getCategoryMeals()
    },[cat])

    return (
        <div className='category-container'>
            <h3>{cat}</h3>
            {
                meals ? meals.map(meal=> <PreviewCat meal={meal} key={meal.idMeal}/>) : <><Spinner/></>
              // meals ? meals.map(meal=> console.log(meal)) : <></>
            }
        </div>
    )
}