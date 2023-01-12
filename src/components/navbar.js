import React from 'react';
import navImg from './images/Earth.png'


export default function Navbar(){
    return(
        <nav>
            <img className='nav-img' src={navImg}/>
            <p className='nav-p'>my travel journal.</p>
        </nav>
    )
}