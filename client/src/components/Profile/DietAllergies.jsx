import React from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';

function DietAllergies(props) {
  return (
    <div className="diet-allergies">
      <Form>
        <div className="form-group">
          <h2>Add Allergies</h2>
          <InputGroup>
            <Input type="text" name="allergies" placeholder="Start typing ingredients" />
            <InputGroupAddon addonType="append"><Button>Add</Button></InputGroupAddon> 
          </InputGroup>
          <br />
          <h4>Here are your allergies:</h4>
          <p>{props.allergies}</p>
        </div>
        <div className="form-group">
        <h2>Your Diet</h2>
          <FormGroup check>
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
        <Button type="submit">Save Preferences</Button>
      </Form>
    </div>
  )
}

export default DietAllergies;