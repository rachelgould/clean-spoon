import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import './Profile.css';
import { Col, Card, Form, Button, Input, Label, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Profile extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      
      <div class="row">
      <Navbar />
      <div class="col-md-4" id="profile">
        
        <Col sm="8" >
          <Card body>
        <div className="row justify-content-center" id="profileBody">
          <div className="col-3">
            Update your profile
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="padraig@gmail.com" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="" />
              </FormGroup>
              <Button>Save</Button>
            </Form>
          </div>
          <div className="col-3  text-center">
            Your Diet
            <FormGroup check>
              <br />
              <Label check>
                <Input type="checkbox" />{' '}
                Vegan
          </Label>
              <br />
              <Label check>
                <Input type="checkbox" />{' '}
                Vegetarian
          </Label>
              <br />
              <Label check>
                <Input type="checkbox" />{' '}
                Gluten Free
          </Label>
            </FormGroup>
          </div>
          <div className="col-3">
            Allergies
            <FormGroup check>
              <br />
              <Input type="text" name="allergies" placeholder="Add Allergies" />
              <Button>Add</Button>
            </FormGroup>
          </div>
        </div>
        </Card>
        </Col>
      </div>
      </div>
    );
  }
}
export default Profile