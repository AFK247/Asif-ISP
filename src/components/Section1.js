import React from 'react';
import '../App.css';
import './Section1.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

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
          <Link style={{textDecoration:"none"}} to='/packages'> Get Started </Link>
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Buy Package <i className='far fa-play-circle' />
        </Button>



      </div>

    </div>
  )
}

export default Section1;