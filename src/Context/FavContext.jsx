import React,{createContext, useState} from 'react';

export const FavContext = createContext();

export function FavContextProvider({children}){

   const [favMeals, setFavMeals] = useState([]);

    const getFavs = ()=>{
        setFavMeals(JSON.parse(localStorage.getItem('Fav Meal')))
    }  
    const addFav = (meal)=>{
        const meals = JSON.parse(localStorage.getItem('Fav Meal'))
        if(meals){
            localStorage.setItem('Fav Meal', JSON.stringify([...meals,meal]));
        } else{
            localStorage.setItem('Fav Meal', JSON.stringify([meal]));
        }
       
    }
    const removeFav = (id)=>{
        localStorage.setItem('Fav Meal', JSON.stringify(favMeals.filter(item => item.idMeal !== id)))
        
    }
    const isFav =(meal)=>{
        let coincidence = favMeals.filter(item => item.idMeal === meal.idMeal);
        if(coincidence.length){
            return true;
        } else{
            return false;
        }
    }


    return (
      <FavContext.Provider value={{isFav, addFav, favMeals, removeFav, getFavs}}>
          {children}
      </FavContext.Provider> 
    );
}