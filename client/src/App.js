import React, {
  Component
} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/foundation.min.css';
import  Routes from './routes';
import {Helmet} from 'react-helmet';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
    <div>
      <Helmet bodyAttributes={{style: 'background-image : url("http://grandtheatrecompany.com/wp-content/uploads/2016/05/img_3.jpg")'}}/>
      <Routes />
    </div>
    );
  }
}

export default App;
// module.exports = App;