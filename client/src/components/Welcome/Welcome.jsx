import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Welcome.css';
import Navbar from '../Navbar/nav.jsx';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <Navbar />  
    </div>
    );
  }
}
export default Welcome;



