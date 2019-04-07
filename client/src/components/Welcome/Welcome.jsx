import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import Hero from './Hero.jsx'
import Howto from './Howto.jsx'

const Welcome = () => {
  return (
    <div className="welcome">
      <Navbar />
      <Hero />
      <Howto />
    </div>
  );
}
export default Welcome;



