import React from 'react';
import {AiOutlineReload} from 'react-icons/ai';
import Preview from './Preview';


export default function RandomMeal({random, randomMeal}){

    return (
        <>
        <div className='random-container'>
            <div className='app-header'>
             <h2>Ideas to inspire you</h2>
             <button onClick={randomMeal}><AiOutlineReload/></button>
            </div>
            <Preview meal={random}/>
        </div>
        </>
        )
}