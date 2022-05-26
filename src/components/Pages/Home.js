import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Section1 from '../Section1';
import Carousel from '../Carousel';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Section1 />
      <Cards />
      <Carousel/>
      <Footer/>
    </>
  );
}

export default Home;