import React,{useContext, useEffect, useState} from 'react';

import FavButton from './FavButton';
import { FavContext } from '../../Context/FavContext';
import Instructions from './Instructions';
import MealIngredientesContainer from './MealIngredientesContainer';
import Spinner from '../Spinner/Spinner';
import useGetMeal from '../../Hooks/useGetMeal';
import { useParams } from 'react-router';

export default function Meal(){

    const {id} = useParams();
    const [fav, setFav] = useState(false);

    const {addFav, removeFav, isFav, getFavs} = useContext(FavContext);

    const {getMeal, meal, handle, ingredients, measures} = useGetMeal({ setFav, isFav })  

    function favouriteMeal(){
      //  setFav(isFav(meal))
        if(fav){
            setFav(false);
            removeFav(meal.idMeal)
        } else if(!fav){
            setFav(true);
            addFav(meal);
        }
    }

      useEffect(()=>{
        getFavs()
        getMeal(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps     
      },[id]);

    return (
        <div className='meal-container'>
            {meal ? <>
                <h1>{meal.strMeal}</h1>
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

