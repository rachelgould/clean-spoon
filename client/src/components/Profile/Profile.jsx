import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import { Col, Card, Form, Button, Input, Label, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Hero from './Hero.jsx'
import DietAllergies from './DietAllergies.jsx'
import { getProfile } from '../../lib/api.js';

class Profile extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    getProfile(this.props.cookies.get('id'), (res) => {
      // console.log(res);
    });
  }

  render() {
    return (
      <div className="profile">
        <Navbar />
        <Hero />
        <DietAllergies />
      </div>
    );
  }
}
export default Profile