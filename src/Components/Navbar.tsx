import { Link } from 'react-router-dom';
import React from 'react';
import Search from './Search';
import SearchResult from './SearchResult';
import useSearchMeal from '../Hooks/useSearchMeal';

export default function Navbar(){

    const { search,handlerSearch, searchResult, setHandlerSearch, setSearchResult} = useSearchMeal();


    return (
        <div className='navbar'>
            <Link to='/'><h1>Recipe App</h1></Link>
            <Search search={search} />
            { handlerSearch ?
                <SearchResult result={searchResult} setHandlerSearch={setHandlerSearch} setSearchResult={setSearchResult}/> : <></>
            }
        </div>
    )
}