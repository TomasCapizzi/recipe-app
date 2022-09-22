import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

import React from 'react';

function FavButton({favouriteMeal, fav}) {
  return (
    <button id='fav-meal' onClick={favouriteMeal} >{
        fav ? <AiFillHeart/> : <AiOutlineHeart/>
    }</button>
  )
}

export default FavButton