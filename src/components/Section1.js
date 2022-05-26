import React from 'react';
import '../App.css';
import './Section1.css';
import {Button} from './Button';

function Section1() {
  return (
    <div className='sec1-container'>
        <h1>Are You Ready?</h1>
        <p>What are you waiting for?</p>
        <div className='sec1-button'>
            <Button 
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                Get Started
            </Button>

            <Button 
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                Watch Trailer <i className='far fa-play-circle'/>
            </Button>

            

        </div>

    </div>
  )
}

export default Section1;