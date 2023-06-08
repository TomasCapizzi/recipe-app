import React,{useRef} from 'react';

import {BiSearch} from 'react-icons/bi'

interface Props {
    search: (value: string) => void
}

export default function Search({search}: Props){


    const searchRef = useRef<HTMLInputElement>(null)

    function getSearch(e: React.MouseEvent<SVGElement, MouseEvent> | React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(searchRef.current){
            let value = searchRef.current.value;
            search(value);
            value = ''
        }
    } 

    return (
        <div className='search'>
            <form action="" onSubmit={(e)=>getSearch(e)}>
                <input type="text"  ref={searchRef}/>
                <BiSearch className='search-logo' onClick={(e)=>getSearch(e)}/>
            </form>
        </div>
    )
}