import {Meal} from '../Interfaces/Meal'
import { useState } from "react";

interface Props {
  //getIngredients: []
  setFav: React.Dispatch<React.SetStateAction<boolean>>
  isFav: (meal: Meal, id?: number) => boolean
}

//getIngredients
const useGetMeal = ({setFav, isFav}: Props) => {

    const url: string = 'https://www.themealdb.com/api/json/v1/1';
    const ingredientsList: string[] = [];
    const measurements: string[] = [];
    const [handle, setHandle] = useState(false);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [measures, setMeasures] = useState<string[]>([]);
    const [meal, setMeal] = useState<Meal>();

 

    function getIngredients(meal: Meal){
      for(let i=1;i<=20;i++){
          //ingredientsList.push(meal['strIngredient'+i]);   
          //measurements.push(meal['strMeasure'+i]);                  
          if(i===20){
              setIngredients(ingredientsList);
              setMeasures(measurements);
              setHandle(true);
          }
      }        
  }
    async function getMeal(id: number){
      const respuesta = await fetch(url + '/lookup.php?i=' + id);
      const res = await respuesta.json();
      setMeal(res.meals[0]); 
      getIngredients(res.meals[0]);
      setFav(isFav(res.meals[0]));  
  }


  return {
    getMeal,
    setMeal,
    meal,
    handle,
    ingredients,
    measures
}
}

export default useGetMeal