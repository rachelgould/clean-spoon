import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/nav.jsx';
import QuickSearch from '../QuickSearch/QuickSearch.jsx';

class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <p>This is the Welcome page</p>
        <QuickSearch />
        <div className="off-canvas-wrapper">
          <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;



