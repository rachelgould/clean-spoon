import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import { Col, Card, Form, Button, Input, Label, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Hero from './Hero.jsx'
import DietAllergies from './DietAllergies.jsx'
import { getProfile } from '../../lib/api.js';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      allergies: []
    }; 
  }
 
  componentDidMount() {
    let userAllergies = []
    getProfile(this.props.cookies.get('id'), (res) => {
      // console.log("Users profile name is " + res.data.name);
      // console.log("Users email is " + res.data.email);
      // console.log("Allergies: " + res.data.allergies);
      res.data.allergies.forEach((entry) => {
        userAllergies.push(entry)
      })
      this.setState({
        username: res.data.name,
        email: res.data.email,
        allergies: userAllergies
      }) 
    });
  }

  render() {
    return (
      <div className="profile">
        <Navbar />
        <Hero username={this.state.username}
              email={this.state.email}
              />
        <DietAllergies /*addAllergy={this.addAllergy}*/ allergies={this.state.allergies} />
      </div>
    );
  }
}
export default Profile