import React from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';
import Table from './Table.jsx';

function DietAllergies(props) {

  // updateUserPreferences= (event) => {
  //   console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  //   console.log(event.target)
  // }

  return ( 
    <div className="diet-allergies">
      <Form>
        <div className="form-group">
          <h2>Allergies</h2>
          <InputGroup>
            <Input type="text" name="allergies" placeholder="Add allergies here" />
            <InputGroupAddon addonType="append"><Button>Add</Button></InputGroupAddon> 
          </InputGroup>
          <br />
          <Table characterData={props.allergies}/>
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
          </FormGroup>
        </div>
        <Button type="submit" /*onSubmit={(this.updateUserPreferences}*/ >Save Preferences</Button>
      </Form>
    </div>
  )
}

export default DietAllergies;