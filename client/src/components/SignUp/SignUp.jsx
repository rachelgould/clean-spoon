import React, { Component } from 'react';
import './SignUp.css';
import Navbar from '../Navbar/nav.jsx';
import { Card, Button } from 'reactstrap';



class SignUp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="row " id="signUpBody">
          <div className="medium-5 columns left">
          <Card body >
            <h4>Sign Up</h4>
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" onChange={this.onChange} />
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" onChange={this.onChange} />
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" onChange={this.onChange} />
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" onChange={this.onChange} />
            <Button color="info" className="loginBtn" onClick={this.login}>Sign up</Button>
            <Button color="success" className="loginBtn" href="/login">Login</Button>
            </Card>
          </div>

        </div>
      </div>
    );
  }
}

export default SignUp;



