import Preview from './Preview';
import RandomHeader from './RandomHeader';
import React from 'react';

export default function RandomMeal({random, randomMeal}){

    return (
        <div className='random-container'>
            <RandomHeader randomMeal={randomMeal} />
            <Preview meal={random}/>
        </div>
    )
}