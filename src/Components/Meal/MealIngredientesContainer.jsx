import Ingredients from './Ingredients'
import Measures from './Measures'
import React from 'react'

function MealIngredientesContainer({ingredients, measures}) {
  return (
    <div className='meal-ingredients'>
        <h2>Ingredients</h2>
        <Ingredients ingredients={ingredients} />
        <Measures measures={measures} />
    </div>
  )
}

export default MealIngredientesContainer