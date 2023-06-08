const useRandomMeal = ({setRandom}) => {

    const url = 'https://www.themealdb.com/api/json/v1/1';
      
    async function randomMeal(){
        const respuesta = await fetch(url + '/random.php');
        const res = await respuesta.json();    
        setRandom(res.meals)
    }
  return {
    randomMeal
  }
}

export default useRandomMeal