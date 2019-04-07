import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Hero(props){

  return (
   
    <div className="hero">
      <div className="profile-box">
        <h1>{props.username}'s Profile</h1>
        <Form>
        <FormGroup>
          <Label for="examnamepleEmail" className="label">Name</Label>
          <Input type="text" name="name" id="name" placeholder={props.username} />
        </FormGroup>
        <FormGroup>
          <Label for="email" className="label">Email</Label>
          <Input type="email" name="email" id="email" placeholder={props.email} />
        </FormGroup>
        <Button className="search-button" color="primary" type="submit">Save</Button>
        </Form>
      </div>
    </div>
  )
}

export default Hero;