import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';
import Navbar from '../Navbar/nav.jsx';
import {Card,Button} from 'reactstrap';

class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <Navbar />
      <div className="row" id="loginBody">
        <div className="medium-5 columns left">
        <Card body >
        <h4>Login</h4>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" onChange={this.onChange}/>
        <label>Password</label>
        <input type="password" name="password"  placeholder="Password" onChange={this.onChange}/>
        <Button color="success" className="loginBtn" onClick={this.login}>Login</Button>
        <Button color="info" className="loginBtn" href="/signup">Sign up</Button>
        </Card>
        </div>     
      </div>   
    </div>
    );
  }
}
export default Login;



