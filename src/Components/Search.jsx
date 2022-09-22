import React,{useRef} from 'react';

import {BiSearch} from 'react-icons/bi'

export default function Search({search}){


    const searchRef = useRef()

    function getSearch(e){
        e.preventDefault();
        let value = searchRef.current.value;
        search(value);
        searchRef.current.value = ''
    } 

    return (
        <div className='search'>
            <form action="" onSubmit={getSearch}>
                <input type="text"  ref={searchRef}/>
                <BiSearch className='search-logo' onClick={getSearch}/>
            </form>
        </div>
    )
}