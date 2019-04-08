import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import { Col, Card, Form, Button, Input, Label, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Hero from './Hero.jsx'
import DietAllergies from './DietAllergies.jsx'
import { getProfile, updateProfile } from '../../lib/api.js';
import { resetWarningCache } from 'prop-types';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      vegetarian: "",
      vagan: "",
      allergies: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  refreshProfile = () => {
    let userAllergies = []
    getProfile(this.props.cookies.get('id'), (res) => {
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

  componentDidMount() {
    let userAllergies = []
    getProfile(this.props.cookies.get('id'), (res) => {
      res.data.allergies.forEach((entry) => {
        userAllergies.push(entry)
      })
      this.setState({
        username: res.data.name,
        email: res.data.email,
        vegetarian: res.data.vegetarian,
        vegan: res.data.vegan,
        allergies: userAllergies
      })
    });
  }

  handleSubmit = event => {
   // console.log(this.state.inputValue)
   let user = {
     name: this.state.username,
     email: this.state.email,
     vegetarian: this.state.vegetarian, 
     vegan: this.state.vegan
   }
    event.preventDefault();
    updateProfile(this.props.cookies.get('id'), user, (results) => {
      if (results.status === 200) {
        this.refreshProfile()
      } else {
        alert("There was a problem. Please try again.")
      }
    })
  }

  updateNameValue = evt => {
    this.setState({
      username: evt.target.value,
    });
  }

  updateEmailValue = evt => {
    this.setState({
      email: evt.target.value,
    });
  }

  updateVegetarianValue = evt => {
    this.setState({
      vegetarian: evt.target.value,
    });
  }

  updateVeganValue = evt => {
    this.setState({
      vegan: evt.target.value,
    });
  }


  render() {
    return (
      <div className="profile">
        <Navbar />
        {/* <Hero username={this.state.username} email={this.state.email} handleSubmit={this.handleSubmit}/>
        <DietAllergies allergies={this.state.allergies} /> */}


        <h1>{this.state.username}'s Profile</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="name" className="label">Name</Label>
            <Input type="text" name="name" id="name" placeholder={this.state.username} onChange={this.updateNameValue} />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="label">Email</Label>
            <Input type="email" name="email" id="email" placeholder={this.state.email} onChange={this.updateEmailValue} />
          </FormGroup>
          <FormGroup>
            <Label for="vegetarian" className="label">Vegetarian</Label>
            <Input type="text" name="vegetarian" id="vegetarian" onChange={this.updateVegetarianValue} />
          </FormGroup>
          <FormGroup>
          <Label for="vegan" className="label">Vegan</Label>
            <Input type="text" name="vegan" id="vegan" onChange={this.updateVeganValue} />
          </FormGroup>
          <Button className="search-button" color="primary" type="submit">Save</Button>
        </Form>

      </div>
    );
  }
}
export default Profile
