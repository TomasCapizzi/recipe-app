import { useState } from "react";

const useGetMeal = ({getIngredients, setFav, isFav}) => {

    const url = 'https://www.themealdb.com/api/json/v1/1';
    const ingredientsList = [];
    const measurements = [];
    const [handle, setHandle] = useState(false);
    const [ingredients, setIngredients] = useState();
    const [measures, setMeasures] = useState();

    const [meal, setMeal] = useState();

 

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
    async function getMeal(id){
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