import React from 'react';
import  Routes from './routes';
import { CookiesProvider } from 'react-cookie';

const App = () => {
  return ( 
  <CookiesProvider>
    <Routes />
  </CookiesProvider>
  );
}

export default App;