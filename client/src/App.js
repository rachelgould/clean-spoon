import React, { Component } from 'react';
import  Routes from './routes';
import { CookiesProvider } from 'react-cookie';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
    <CookiesProvider>
      <Routes />
    </CookiesProvider>
    );
  }
}

export default App;