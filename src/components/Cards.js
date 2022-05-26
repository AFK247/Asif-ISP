import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out the Exciting Packages</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             src={require('./Carousel/pac.png')}
              text='Explore the Fastest Internet'
              label='Adventure'
              path='/sign-up'
            />
            <CardItem
              src={require('./Carousel/img-2.jpg')}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/sign-up'
            />
            <CardItem
              src={require('./Carousel/img-2.jpg')}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('./Carousel/img-3.jpg')}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/sign-up'
            />
            <CardItem
              src={require('./Carousel/img-1.jpg')}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/sign-up'
            />
            <CardItem
              src={require('./Carousel/img-2.jpg')}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      
    </div>
     
  );
}

export default Cards;