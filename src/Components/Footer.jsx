import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

export default function Footer(){

    return (
        <div className='footer'>
            <h3>App realizada por Tomás Capizzi</h3>
            <Link><AiFillGithub/></Link>
            <Link><AiFillLinkedin/></Link>
        </div>
    )
}