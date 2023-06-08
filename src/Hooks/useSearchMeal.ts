import { Meal } from "../Interfaces/Meal";
import { useState } from "react";

const useSearchMeal = () => {

  const [handlerSearch, setHandlerSearch] = useState(false);
  const [searchResult, setSearchResult] = useState<Meal[] | undefined>();

    const url: string = 'https://www.themealdb.com/api/json/v1/1';

    async function search(term: string){
        const respuesta = await fetch(url + '/search.php?s=' + term);
        const res = await respuesta.json();
        const food = res.meals;
        setSearchResult(food);
        setHandlerSearch(true);   
    }
    
  return {
    search,
    handlerSearch,
    setHandlerSearch,
    setSearchResult,
    searchResult
  }
}

export default useSearchMeal