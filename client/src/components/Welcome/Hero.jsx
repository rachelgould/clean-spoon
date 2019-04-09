import React from 'react';
import { Jumbotron } from 'reactstrap';

function Hero(props) {
  return (
    <Jumbotron className="hero" fluid>
    <h1 className="big-title">DINNER IS IN YOUR FRIDGE.</h1>
    </Jumbotron>
  )
}

export default Hero;