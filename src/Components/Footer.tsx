import React from 'react';
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

export default function Footer(){

    return (
        <div className='footer'>
            <h3>App realizada por Tomás Capizzi</h3>
            <a href='https://github.com/TomasCapizzi' target='_blank' rel='noreferrer'><AiFillGithub/></a>
            <a href='https://www.linkedin.com/in/tomas-capizzi/' target='_blank' rel='noreferrer'><AiFillLinkedin/></a>
        </div>
    )
}