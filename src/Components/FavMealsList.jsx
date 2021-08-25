import React, {useContext, useEffect} from 'react';
import { FavContext } from '../Context/FavContext';
import { Link } from 'react-router-dom';

export default function FavMealsList(){

    const {favMeals, getFavs} = useContext(FavContext);

    useEffect(()=>{
        getFavs();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    return (
        <div className='fav-list'>
            {favMeals ? favMeals.map(
                item => <Link  key={item.idMeal} to={'/meal/' + item.idMeal}>
                <img src={item.strMealThumb} alt="meal"/>
                </Link>
            ) : <></>
            }
        </div>
    )
}