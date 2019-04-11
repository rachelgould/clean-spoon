import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

function FilterForm(props) {
  const [extraAllergies, setExtraAllergies] = useState([null]);
  const [diet, setDiet] = useState({
    vegetarian: false, //Change this so it takes from the server
    vegan: false,
  });
  const [excludedCourses, setExcludedCourses] = useState([null]);
  const [excludeAllHolidays, setExcludeAllHolidays] = useState(false);

  const allergySubmit = (event) => {
    event.persist();
    event.preventDefault();
    const { value } = event.target;
  }

  return (
    <>
      <Form inline onSubmit={allergySubmit}>
          <Label for="allergies">Exclude these ingredients</Label><br />
        <FormGroup>
            <Input name="allergies" id="allergies" placeholder="e.g. Brussel Sprouts" />
            <Button color="danger" type="submit">Add Item</Button>
            <div className="submitted-allergies">{extraAllergies}</div>
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="diet">Change your diet</Label>
          <CustomInput type="switch" id="diet-vegetarian" name="diet-vegetarian" label="Vegetarian" />
          <CustomInput type="switch" id="diet-vegan" name="diet-vegan" label="Vegan" />
        </FormGroup>
        <Label>Excluded courses</Label>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" id="main-dishes" />{' '}
            Main Course
          </Label>
          <Label check>
            <Input type="checkbox" id="dessert-dishes" />{' '}
            Dessert
          </Label>
          <Label check>
            <Input type="checkbox" id="side-dishes" />{' '}
            Side Dish
          </Label>
          <Label check>
            <Input type="checkbox" id="lunch-snack-dishes" />{' '}
            Lunch & Snacks
          </Label>
          <Label check>
            <Input type="checkbox" id="appetizer-dishes" />{' '}
            Appetizer
          </Label>
          <Label check>
            <Input type="checkbox" id="salad-dishes" />{' '}
            Salad
          </Label>
          <Label check>
            <Input type="checkbox" id="bread-dishes" />{' '}
            Bread
          </Label>
          <Label check>
            <Input type="checkbox" id="breakfast-dishes" />{' '}
            Breakfast & Brunch
          </Label>
          <Label check>
            <Input type="checkbox" id="soup-dishes" />{' '}
            Soup
          </Label>
          <Label check>
            <Input type="checkbox" id="beverage-dishes" />{' '}
            Beverages
          </Label>
          <Label check>
            <Input type="checkbox" id="sauces-dishes" />{' '}
            Sauce
          </Label>
          <Label check>
            <Input type="checkbox" id="cocktail-dishes" />{' '}
            Cocktails
          </Label>
        </FormGroup>
        <FormGroup>
          <CustomInput type="switch" id="exclude-holidays" name="exclude-holidays" label="Exclude holiday dishes?" />
        </FormGroup>
        <Button color="danger">Search Again</Button>
      </Form>
    </>
  );
}

export default FilterForm;