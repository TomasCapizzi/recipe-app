import React,{useContext, useEffect, useState} from 'react';

import FavButton from './FavButton';
import { FavContext } from '../../Context/FavContext';
import Instructions from './Instructions';
import { MealContext } from '../../Interfaces/Meal';
import MealIngredientesContainer from './MealIngredientesContainer';
import Spinner from '../Spinner/Spinner';
import useGetMeal from '../../Hooks/useGetMeal';
import useIntersectionObserver from '../../Hooks/useIntersectionObserver';
import { useParams } from 'react-router';

export default function Meal(){
    const {isIntersecting, elementRef} = useIntersectionObserver({})

    const {id} = useParams();
    const [fav, setFav] = useState(false);

    const {addFav, removeFav, isFav, getFavs} = useContext(FavContext) as MealContext;

    const {getMeal, meal, handle, ingredients, measures} = useGetMeal({ setFav, isFav })  

    function favouriteMeal(){
      //  setFav(isFav(meal))
      if(meal){
        if(fav){
            setFav(false);
            removeFav(meal.idMeal)
        } else if(!fav){
            setFav(true);
            addFav(meal);
        }
      }
    }
    useEffect(()=>{
        getFavs()
        getMeal(Number(id));
        // eslint-disable-next-line react-hooks/exhaustive-deps     
      },[id]);

    return (
        <div className='meal-container' ref={elementRef}>
            {meal ? <>
                <h1 className={isIntersecting? 'mealNameOn': 'mealNameOff'} >{meal.strMeal}</h1>
                <FavButton favouriteMeal={favouriteMeal} fav={fav} />
                <div className='meal-detail'>
                    <img src={meal.strMealThumb} alt="meal" />
                    {handle ?
                        <MealIngredientesContainer ingredients={ingredients} measures={measures} />
                    :   null
                    }
                </div>
                <Instructions meal={meal} />
            </>
            : <Spinner/>                  
            }                   
        </div>
    )
}

