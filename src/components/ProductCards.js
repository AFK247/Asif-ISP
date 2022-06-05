import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Footer from './Footer'


function Cards() {
  return (
    <>
    <div className='cards'>
      <h1>Check Out Our Quality Branded Products</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
             src={require('./Carousel/logi.png')}
              text='Explore the Fastest Internet'
              text1="This is a very powerfull Headphone"
              label='Headphone'
              path='/sign-up'
            />
                  
            <CardItem
              src={require('./Carousel/router.png')}
              text='Travel through the Islands of Bali in a Private Cruise'
              text1="This is a very powerfull Router"
              label='Router'
              path='/sign-up'

            />
            <CardItem
              src={require('./Carousel/splitter.png')}
              text='Travel through the Islands of Bali in a Private Cruise'
              text1="This is a very powerfull Splitter"
              label='Splitter'
              path='/sign-up'
            />
            
          </ul>
          <ul className='cards__items'>
          <CardItem
              src={require('./Carousel/router.png')}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Router'
              path='/sign-up'
            />
          <CardItem
             src={require('./Carousel/logi.png')}
              text='Explore the Fastest Internet'
              label='Headphone'
              path='/sign-up'
            />
            <CardItem
              src={require('./Carousel/splitter.png')}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Splitter'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
    
    
     
  );
}

export default Cards;