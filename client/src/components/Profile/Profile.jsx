import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import { ButtonGroup, InputGroup, InputGroupAddon,  Col, Card, Form, Button, Input, Label, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Hero from './Hero.jsx'
import DietAllergies from './DietAllergies.jsx'
import { getProfile, updateProfile } from '../../lib/api.js';
import { resetWarningCache } from 'prop-types';
import Table from './Table.jsx';
import AllergyForm from './AllergyForm.jsx'

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
    this.handleUserSubmit = this.handleUserSubmit.bind(this);
    this.handleAllergySubmit = this.handleAllergySubmit.bind(this);
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

  handleUserSubmit = event => {
   let user = {
     name: this.state.username,
     email: this.state.email,
     vegetarian: this.state.vegetarian, 
     vegan: this.state.vegan, 
     allergies: this.state.allergies
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

  removeItem = index => {
    // Must be edited to call DB
    const { allergies } = this.state 
    this.setState({
      allergies: allergies.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleAllergySubmit = allergy => {
   // const { allergies } = this.state 
    this.setState({ allergies: [...this.state.allergies, allergy] })
    //console.log(this.state.allergies)
  }

  render() {
    return (
      <div className="profile">
        <Navbar />
        {/* <Hero username={this.state.username} email={this.state.email} handleSubmit={this.handleSubmit}/> */}
        {/* <DietAllergies allergies={this.state.allergies} /> */}


        <h1>Edit Profile</h1>
        <Form onSubmit={this.handleUserSubmit}>
          <FormGroup>
            <Label for="name" className="label">Name</Label>
            <Input type="text" name="name" id="name" placeholder={this.state.username} onChange={this.updateNameValue} />
          </FormGroup>
          <FormGroup>
            <Label for="email" className="label">Email</Label>
            <Input type="email" name="email" id="email" placeholder={this.state.email} onChange={this.updateEmailValue} />
          </FormGroup>
          <FormGroup>
            <Label for="vegetarian" className="label">Vegetarian?</Label>
            <Input type="text" name="vegetarian" id="vegetarian" onChange={this.updateVegetarianValue} />
          </FormGroup>
          <FormGroup>
          <Label for="vegan" className="label">Vegan? </Label>        
            <Input type="text" name="vegan" id="vegan" onChange={this.updateVeganValue} />  
          </FormGroup>
        <br />
          <Button className="search-button" color="primary" type="submit">Save</Button> 
          </Form>



          <br/><br/>
          <h4>Allergies</h4>
          <Table characterData={this.state.allergies} removeItem={this.removeItem}/>
          <AllergyForm handleSubmit={this.handleAllergySubmit}/>



      </div>
    );
  }
}
export default Profile
