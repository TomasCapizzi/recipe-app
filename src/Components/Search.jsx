import React from 'react';
import {BiSearch} from 'react-icons/bi'


export default function Search({search}){

function getSearch(e){
       e.preventDefault();
       let value = document.getElementById('search').value;
       search(value);
       document.getElementById('search').value = ''
} 

    return (
        <div className='search'>
            <form action="" onSubmit={getSearch}>
                <input type="text"  id='search'/>
                <BiSearch className='search-logo' onClick={getSearch}/>
            </form>
           

        </div>
    )
}