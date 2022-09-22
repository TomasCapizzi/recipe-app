import React from 'react'

function Measures({measures}) {
  return (
    <div>
        <h3>Measures</h3>
        {measures.map(
            (measure, pos) => <p key={pos}>{measure}</p>
        )}            
    </div>
  )
}

export default Measures