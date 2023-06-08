import {Link} from 'react-router-dom'
import { Meal } from '../Interfaces/Meal';
import React from 'react';

interface Props {
    meal: Meal[]
}

export default function Preview({meal}: Props){
    

    return <div className='preview-meal'>
            <h3>{meal[0].strMeal}</h3>
            <Link to={'/meal/'+ meal[0].idMeal}>
                <img src={meal[0].strMealThumb} alt="Meal" />
            </Link>
        </div>
}