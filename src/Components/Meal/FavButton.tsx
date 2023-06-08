import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

import React from 'react';

interface Props {
  favouriteMeal: () => void
  fav: boolean
}

function FavButton({favouriteMeal, fav}: Props) {
  return (
    <button id='fav-meal' onClick={favouriteMeal} >{
        fav ? <AiFillHeart/> : <AiOutlineHeart/>
    }</button>
  )
}

export default FavButton