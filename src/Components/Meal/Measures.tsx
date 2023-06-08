import React from 'react'

interface Props {
  measures: string[]
}

function Measures({measures}: Props) {
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