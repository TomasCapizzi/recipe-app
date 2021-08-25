import React, {useContext, useEffect} from 'react';
import { FavContext } from '../Context/FavContext';
import { Link } from 'react-router-dom';

export default function FavMealsList(){

    const {favMeals, getFavs} = useContext(FavContext);

    useEffect(()=>{
        getFavs();
    },[])


    return (
        <div className='fav-list'>
            {favMeals ? favMeals.map(
                item => <Link to={'/meal/' + item.idMeal}  key={item.idMeal}>
                <img src={item.strMealThumb} alt="meal image" />
                </Link>
            ) : <></>
            }
        </div>
    )
}