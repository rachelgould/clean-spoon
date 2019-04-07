import React from 'react';
import { Button } from 'reactstrap';

function Hero(props) {
  return (
    <div className="hero">
      <div className="quicksearch">
        <h1>Quick Search</h1>
        <Button className="search-button" color="primary" href="/search">Find Recipes Now</Button>
      </div>
    </div>
  )
}

export default Hero;