import React from 'react'

interface Props {
  ingredients: string[]
}

function Ingredients({ingredients}: Props) {
  return (
    <div>
        <h3>Ingredient</h3>
        {ingredients.map(
            (ing, pos) => <p key={pos}>{ing}</p>
        )}
    </div>
  )
}

export default Ingredients