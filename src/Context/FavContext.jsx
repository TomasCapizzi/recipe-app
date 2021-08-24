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
        console.log(favMeals[0].idMeal)
        //setFavMeals(favMeals.filter(item => item.idMeal !== id))
        localStorage.setItem('Fav Meal', JSON.stringify(favMeals.filter(item => item.idMeal !== id)))
        // localStorage.setItem('IDcomida', JSON.stringify(IDcomida.filter((id) => id != mealId)));
        //let newFavs = favMeals.filter(item => item.idMeal !== id);
        
    }
    const isFav =(meal)=>{

        let coincidence = favMeals.filter(item => item.idMeal === meal.idMeal);
        console.log(coincidence)
        if(coincidence.length){
            console.log('hola')
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