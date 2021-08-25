import React from 'react';
import {BiRightArrow} from "react-icons/bi";
import {Link} from 'react-router-dom';

export default function SearchResult({result, setHandlerSearch}){

    function cancelSearch(){
        setHandlerSearch(false);
    }

    return <div className='search-result'>
        <button onClick={cancelSearch}><BiRightArrow/></button>
        <div>
            {
                result.map(item => <Link to={'/meal/' + item.idMeal}><h1>{item.strMeal}</h1></Link>)
            }
        </div>
    </div>
}