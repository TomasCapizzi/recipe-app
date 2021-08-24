import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';

export default function Navbar(){


    return (
        <div className='navbar'>
            <Link to='/'><h1>Recipe App</h1></Link>
            <Search/>
        </div>
    )
}