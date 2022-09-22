import React from 'react'

function Instructions({meal}) {
  return (
    <div className='instructions'>
        <p>{meal.strInstructions}</p>
    </div>
  )
}

export default Instructions