import React from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';

function DietAllergies(props) {
  return (
    <div className="diet-allergies">
      <Form>
        <div>
          <h2>Add Allergies</h2>
          <Input type="text" name="allergies" placeholder="Add Allergies" />
          <Button>Add</Button>
        </div>
        <div>
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
        <Button type="submit">Save</Button>
      </Form>
    </div>
  )
}

export default DietAllergies;