import React, {useContext, useEffect} from 'react';

import { FavContext } from '../Context/FavContext';
import { Link } from 'react-router-dom';
import { MealContext } from '../Interfaces/Meal';

export default function FavMealsList(){

    const {favMeals, getFavs} = useContext(FavContext) as MealContext;

    useEffect(()=>{
        getFavs();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[favMeals])


    return (
        <div className='fav-list'>
            {favMeals ? favMeals.map(
                (item, pos) => <Link  key={pos} to={'/meal/' + item.idMeal}>
                <img src={item.strMealThumb} alt="meal"/>
                </Link>
            ) : <></>
            }
        </div>
    )
}