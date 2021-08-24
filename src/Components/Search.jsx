import React from 'react';
import {BiSearch} from 'react-icons/bi'


export default function Search(){

   // const url = 'www.themealdb.com/api/json/v1/1/search.php?s='


    return (
        <div className='search'>
            <input type="text" />
            <BiSearch className='search-logo'/>
        </div>
    )
}