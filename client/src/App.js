import React, {
  Component
} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/foundation.min.css';
import  Routes from './routes';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return ( 
    <div>
      {/* http://grandtheatrecompany.com/wp-content/uploads/2016/05/img_3.jpg */}
      {/* https://img.freepik.com/free-photo/colorful-healthy-unhealthy-food-white-textured-background_23-2147885658.jpg?size=626&ext=jpg */}
      <img className='bg' src={'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} />
      <Routes />
    </div>
    );
  }
}

export default App;
// module.exports = App;