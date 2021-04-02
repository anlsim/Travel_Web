import React from 'react';
import './Hero.scss';
const Hero = (props) => {
    return (
       
        <div className= 'hero'>
            <div className='hero-img'>
                <h1 className='text'>{props.title}</h1>
            </div>
            
        </div>
    )
}

export default Hero;