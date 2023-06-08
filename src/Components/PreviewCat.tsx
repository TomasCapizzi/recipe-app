import {Link} from 'react-router-dom'
import { Meal } from '../Interfaces/Meal';
import React from 'react';

interface Props {
    meal: Meal
}

export default function PreviewCat({meal}: Props){    

    return (<div className='preview-cat-meal'>
            <h3>{meal.strMeal}</h3>
            <Link to={'/meal/'+ meal.idMeal}>
                <img src={meal.strMealThumb} alt="Meal" />
            </Link>
        </div>)
}
