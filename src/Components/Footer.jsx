import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

export default function Footer(){

    return (
        <div className='footer'>
            <h3>App realizada por Tomás Capizzi</h3>
            <Link to='https://github.com/TomasCapizzi' target='_blank'><AiFillGithub/></Link>
            <Link to='https://www.linkedin.com/in/tomas-capizzi/' target='_blank'><AiFillLinkedin/></Link>
        </div>
    )
}