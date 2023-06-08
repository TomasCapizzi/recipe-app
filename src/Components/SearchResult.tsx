import {BiRightArrow} from "react-icons/bi";
import {Link} from 'react-router-dom';
import { Meal } from "../Interfaces/Meal";
import React from 'react';

interface Props {
    result: Meal[] | undefined
    setHandlerSearch: React.Dispatch<React.SetStateAction<boolean>>
    setSearchResult: React.Dispatch<React.SetStateAction<Meal[] | undefined>>
}

export default function SearchResult({result, setHandlerSearch, setSearchResult}: Props){

    function cancelSearch(){
        //setHandlerSearch(false);
    }

    return (
    <div className='search-result'>
        <button onClick={cancelSearch}><BiRightArrow/></button>
        <div>
            {
                result && result.map(item => <Link key={item.idMeal} to={'/meal/' + item.idMeal}><h1>{item.strMeal}</h1></Link>)
            }
        </div>
    </div>)
}