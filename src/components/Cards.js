import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our Service Area</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             src={require('./Carousel/dhaka.jpg')}
              text='Explore the Fastest Internet'
              label='Dhaka'
              path='/sign-up'
            />
            <CardItem
              src={require('./Carousel/rajshahi.jpg')}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Rajshahi'
              path='/sign-up'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('./Carousel/rangpur.jpg')}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Rangpur'
              path='/sign-up'
            />
            <CardItem
              src={require('./Carousel/khulna.jpg')}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Khulna'
              path='/sign-up'
            />
            <CardItem
              src={require('./Carousel/sylhet.jpg')}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Sylhet'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      
    </div>
     
  );
}

export default Cards;