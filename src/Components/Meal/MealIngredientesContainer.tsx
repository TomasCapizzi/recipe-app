import Ingredients from './Ingredients'
import Measures from './Measures'
import React from 'react'

interface Props {
  ingredients: string[]
  measures: string[]
}

function MealIngredientesContainer({ingredients, measures}: Props) {
  return (
    <div className='meal-ingredients'>
        <h2>Ingredients</h2>
        <Ingredients ingredients={ingredients} />
        <Measures measures={measures} />
    </div>
  )
}

export default MealIngredientesContainer