import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function MenuCategories(){
    const url = 'https://www.themealdb.com/api/json/v1/1';

    const [categories, setCategories] = useState();

    async function getCategories(){
        const respuesta = await fetch(url + '/categories.php');
        const res = await respuesta.json();
        console.log(res.categories)
        setCategories(res.categories);
        }

    useEffect(()=>{
        getCategories();
    },[])

    return (
        <div className='menu-cat'>
            {
                categories ? categories.map((item) => <Link to={'/category/' + item.strCategory}><button>{item.strCategory}</button></Link>) : <></>
            }
        </div>
    )
}