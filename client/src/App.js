<<<<<<< HEAD
import React, {
  Component
} from 'react';
// import './styles/foundation.min.css';
=======
import React, { Component } from 'react';
import './styles/foundation.min.css';
>>>>>>> 8e5c607df03ef85c302785dc271d432797ec2f5f
import  Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
    <div>
      <Routes />
    </div>
    );
  }
}

export default App;