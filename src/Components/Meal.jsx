import React,{useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router';
import {AiFillHeart} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import { FavContext } from '../Context/FavContext';
import Spinner from './Spinner/Spinner';

export default function Meal({url}){

    const {id} = useParams();
    const [meal, setMeal] = useState();
    const [handle, setHandle] = useState(false);
    const [ingredients, setIngredients] = useState();
    const [measures, setMeasures] = useState();
    const [fav, setFav] = useState(false);
    const ingredientsList = [];
    const measurements = [];

    const {addFav, removeFav, isFav} = useContext(FavContext);

    async function getMeal(id){
        const respuesta = await fetch(url + '/lookup.php?i=' + id);
        const res = await respuesta.json();
        setMeal(res.meals[0]); 
        getIngredients(res.meals[0]);
        setFav(isFav(res.meals[0]));  
      }    

    function getIngredients(meal){
        for(let i=1;i<=20;i++){
            ingredientsList.push(meal['strIngredient'+i]);   
            measurements.push(meal['strMeasure'+i]);                  
            if(i===20){
                setIngredients(ingredientsList);
                setMeasures(measurements);
                setHandle(true);
            }
        }        
    }



    function favouriteMeal(){
        console.log(fav)
      //  setFav(isFav(meal))
        if(fav){
            setFav(false);
            removeFav(meal.idMeal)
            console.log('remover')
        } else if(!fav){
            setFav(true);
            console.log(meal);
            addFav(meal);
        }
    }


      useEffect(()=>{
          getMeal(id);      
      },[]);



    return (
        <div className='meal-container'>
         {meal ? <>
            <h1>{meal.strMeal}</h1>
            <button id='fav-meal' onClick={favouriteMeal} >{
                fav ? <AiFillHeart/> : <AiOutlineHeart/>
            }</button>
            <div className='meal-detail'>
                <img src={meal.strMealThumb} alt="meal" />
                {handle ? <div className='meal-ingredients'>
            <h2>Ingredients</h2>
            <div>
            <h3>Ingredient</h3>
            {ingredients.map(
                ing => <p>{ing}</p>
            )}
            </div>
            <div>
            <h3>Measures</h3>
            {measures.map(
                measure => <p>{measure}</p>
            )}            
            </div>
        </div> : <></>}
            </div>
            <div className='instructions'>
            <p>{meal.strInstructions}</p>
            </div>
            <div>            
            </div>            
            </>
            : <div><Spinner/></div>
            
        }
                   
        </div>
    )
}

