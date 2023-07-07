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
    let ingredientsList: string[] = [];
    let measurements: string[] = [];
    const [handle, setHandle] = useState(false);
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [measures, setMeasures] = useState<string[]>([]);
    const [meal, setMeal] = useState<Meal>();

 

    function getIngredients(meal: Meal){
      console.log(meal);
      ingredientsList = [meal.strIngredient1,meal.strIngredient2,meal.strIngredient3,meal.strIngredient4,meal.strIngredient5,meal.strIngredient6,meal.strIngredient7,meal.strIngredient8,meal.strIngredient9,meal.strIngredient10,meal.strIngredient11,meal.strIngredient12,meal.strIngredient13,meal.strIngredient14,meal.strIngredient15,meal.strIngredient16,meal.strIngredient17,meal.strIngredient18,meal.strIngredient19,meal.strIngredient20]
      measurements = [meal.strMeasure1, meal.strMeasure2,meal.strMeasure3,meal.strMeasure4, meal.strMeasure5,meal.strMeasure6,meal.strMeasure7,meal.strMeasure8,meal.strMeasure9,meal.strMeasure10,meal.strMeasure11, meal.strMeasure12, meal.strMeasure13,meal.strMeasure14,meal.strMeasure15,meal.strMeasure16,meal.strMeasure17,meal.strMeasure18,meal.strMeasure19,meal.strMeasure20 ]
      setIngredients(ingredientsList);
      setMeasures(measurements);
      setHandle(true);       
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