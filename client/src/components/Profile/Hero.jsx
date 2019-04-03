import React from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';

function Hero(props) {
  return (
    <div className="hero">
      <div className="profile-box">
        <h1>{name}'s Profile</h1>
        <Form>
        <FormGroup>
          <Label for="examnamepleEmail" className="label">Name</Label>
          <Input type="text" name="name" id="name" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="email" className="label">Email</Label>
          <Input type="email" name="email" id="email" placeholder="with a placeholder" />
        </FormGroup>
        <Button className="search-button" color="primary" type="submit">Save</Button>
        </Form>
      </div>
    </div>
  )
}

export default Hero;