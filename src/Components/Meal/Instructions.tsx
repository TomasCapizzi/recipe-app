import { Meal } from '../../Interfaces/Meal'
import React from 'react'

interface Props {
  meal: Meal
}

function Instructions({meal}: Props) {
  return (
    <div className='instructions'>
        <p>{meal.strInstructions}</p>
    </div>
  )
}

export default Instructions