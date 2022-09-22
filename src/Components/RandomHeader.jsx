import {AiOutlineReload} from 'react-icons/ai';
import React from 'react';

function RandomHeader({randomMeal}) {
  return (
    <div className='app-header'>
        <h2>Ideas to inspire you</h2>
        <button onClick={randomMeal}><AiOutlineReload/></button>
    </div>
  )
}

export default RandomHeader