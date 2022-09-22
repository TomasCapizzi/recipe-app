import React from 'react'

function Ingredients({ingredients}) {
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