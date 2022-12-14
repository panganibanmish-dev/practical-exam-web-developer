import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <>
            <div className='hero-container'>
                <img src='/images/banner.jpg' />
                <h1>ZERO TO CLOUD IN 100 DAYS WITH ORACLE + NETSUITE</h1>
                <p>The World’s #1 Cloud Business Software Suite </p>
                <div className='hero-btns'>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        Find out More
                    </Button>
                </div>
            </div>
        </>
    )
}

export default HeroSection