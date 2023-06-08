import React,{ReactNode, createContext, useState} from 'react';

import { Meal } from '../Interfaces/Meal';

export const FavContext = createContext({});

interface Props {
    children: ReactNode
}

export function FavContextProvider({children}: Props){

   const [favMeals, setFavMeals] = useState<Meal[]>([]);
   const value = localStorage.getItem('Fav Meal')

    const getFavs = ()=>{        
        setFavMeals(value ? JSON.parse(value) : '')
        //setFavMeals(JSON.parse(localStorage.getItem('Fav Meal') || ""))
    }  
    const addFav = (meal: Meal)=>{
        if(value){
            const meals = JSON.parse(localStorage.getItem('Fav Meal') || "")
            localStorage.setItem('Fav Meal', JSON.stringify([...meals,meal]));
        } else{
            localStorage.setItem('Fav Meal', JSON.stringify([meal]));
        }
       
    }
    const removeFav = (id: number)=>{
        localStorage.setItem('Fav Meal', JSON.stringify(favMeals.filter(item => item.idMeal !== id)))
        
    }
    const isFav =(meal: Meal, id?: number)=>{
        let coincidence: Meal[] | undefined = undefined;
        let coincidence2: Meal[] | undefined = undefined;
        if(favMeals){
            coincidence = favMeals.filter(item => item.idMeal === meal.idMeal);
            coincidence2 = favMeals.filter(item => item.idMeal === id);
            if(coincidence.length || coincidence2.length){
                return true;
            } else{
                return false;
            }
        }
    }


    return (
      <FavContext.Provider value={{isFav, addFav, favMeals, removeFav, getFavs}}>
          {children}
      </FavContext.Provider> 
    );
}