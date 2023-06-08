import React,{useEffect, useState} from 'react';

import { Category } from '../Interfaces/Meal';
import { Link } from 'react-router-dom';

export default function MenuCategories(){
    const url: string = 'https://www.themealdb.com/api/json/v1/1';

    const [categories, setCategories] = useState<Category[]>();

    async function getCategories(){
        const respuesta = await fetch(url + '/categories.php');
        const res = await respuesta.json();
        setCategories(res.categories);
        }

    useEffect(()=>{
        getCategories();
    },[])

    return (
        <div className='menu-cat'>
            {
                categories ? categories.map((item, pos) => <Link key={pos} to={'/category/' + item.strCategory}><button>{item.strCategory}</button></Link>) : <></>
            }
        </div>
    )
}