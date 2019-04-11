import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import { ButtonGroup, InputGroup, InputGroupAddon, Row, Col, Card, Form, Button, Input, Label, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Hero from './Hero.jsx'
import DietAllergies from './DietAllergies.jsx'
import { getProfile, updateProfile } from '../../lib/api.js';
import { resetWarningCache } from 'prop-types';
import Table from './Table.jsx';
import AllergyForm from './AllergyForm.jsx'
import bg from './bg.jpg';

var background=require('./bg.jpg')


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      veganChecked: false,
      vegetarianChecked: false,
      username: "",
      email: "",
      vegetarian: "",
      vegan: "",
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

      console.log("Are you vegan?" + res.data.vegan);
      if (res.data.vegan == true) {
        this.setState({
          veganChecked: true
        })
      }

      console.log("Are you vegetarian? " + res.data.vegetarian);
      if (res.data.vegetarian == true) {
        this.setState({
          vegetarianChecked: true
        })
      }

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

  handleVeganCheckboxChange = event => {
    this.setState({
      veganChecked: event.target.checked,
      vegan: event.target.checked
    });
  }

  handleVegetarianCheckboxChange = event => {
    this.setState({
      vegetarianChecked: event.target.checked,
      vegetarian: event.target.checked
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
    this.setState({ allergies: [...this.state.allergies, allergy] })
  }

  render() {
    return (
      <body class="profileBG">
      <div >
        <Navbar />
        <br />
        <center> <h1>Edit Profile</h1> </center>
        {/* <img src={bg} alt="bg" />; */} 
        <Card id="profileCard">
        <div className="profile">
          <Form onSubmit={this.handleUserSubmit}>
          <center><h4>Profile details</h4></center>
            <FormGroup>
              <Label for="name" className="label">Name</Label>
              <Input type="text" name="name" id="name" placeholder={this.state.username} onChange={this.updateNameValue} />
            </FormGroup>
            <FormGroup>
              <Label for="email" className="label">Email</Label>
              <Input type="email" name="email" id="email" placeholder={this.state.email} onChange={this.updateEmailValue} />
            </FormGroup>
            <br />
            <FormGroup>
              <Label for="vegetarian" className="label">Vegetarian &nbsp;</Label>
               <input type="checkbox" checked={this.state.vegetarianChecked} name="vegetarian" onChange={this.handleVegetarianCheckboxChange} />
               </FormGroup>
            <FormGroup>
              <Label for="vegan" className="label">Vegan &nbsp;</Label>
              <input type="checkbox" checked={this.state.veganChecked} name="vegan" onChange={this.handleVeganCheckboxChange} />
            </FormGroup>
            <br />
            <div className="allergiesParent">
              <div className="allergiesChild">
                <h4>Allergies</h4>
                <AllergyForm handleSubmit={this.handleAllergySubmit} />
                <br />
                <Table characterData={this.state.allergies} removeItem={this.removeItem} />
                <br />
                <Button className="search-button" color="primary" type="submit">Save</Button>
              </div>
            </div>
          </Form>
          </div>
          </Card>
      </div>
      </body>
    );
  }
}
export default Profile
