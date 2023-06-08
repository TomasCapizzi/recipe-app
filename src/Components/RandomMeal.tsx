import { Meal } from '../Interfaces/Meal';
import Preview from './Preview';
import RandomHeader from './RandomHeader';
import React from 'react';

interface Props {
    random: Meal[]
    randomMeal: () => void
}

export default function RandomMeal({random, randomMeal}: Props){

    return (
        <div className='random-container'>
            <RandomHeader randomMeal={randomMeal} />
            <Preview meal={random}/>
        </div>
    )
}