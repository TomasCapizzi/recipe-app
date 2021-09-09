import React from 'react';
import {Link} from 'react-router-dom'

export default function PreviewCat({meal}){    

    return (<div className='preview-cat-meal'>
            <h3>{meal.strMeal}</h3>
            <Link to={'/meal/'+ meal.idMeal}>
                <img src={meal.strMealThumb} alt="Meal" />
            </Link>
        </div>)
}
