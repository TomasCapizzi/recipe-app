import React from 'react';
import {Link} from 'react-router-dom'

export default function Preview({meal}){
    

    return <div className='preview-meal'>
            <h3>{meal[0].strMeal}</h3>
            <Link to={'/meal/'+ meal[0].idMeal}>
                <img src={meal[0].strMealThumb} alt="Meal" />
            </Link>
        </div>
}