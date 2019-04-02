import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import Hero from './Hero.jsx'
import Howto from './Howto.jsx'

class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="welcome">
        <Navbar />
        <Hero />
        <Howto />
      </div>
    );
  }
}
export default Welcome;



