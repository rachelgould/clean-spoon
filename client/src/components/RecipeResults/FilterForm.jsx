import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

function FilterForm(props) {
  const [extraAllergies, setExtraAllergies] = useState([]);
  const [diet, setDiet] = useState({
    vegetarian: false,
    vegan: false
  });
  const [excludedCourses, setExcludedCourses] = useState([]);
  const [excludeAllHolidays, setExcludeAllHolidays] = useState(false);

  const allergySubmit = (event) => {
    event.persist();
    event.preventDefault();
    const currentAllergies = [...extraAllergies]
    const newAllergies = currentAllergies.push(event.target[0].value)
    setExtraAllergies(newAllergies)
    event.target[0].value = ''
  }

  const changeSwitch = (event) => {
    event.persist();
    switch (event.target.id) {
      case 'diet-vegetarian':
        let currentVegetarian = diet.vegetarian
        setDiet({vegetarian: !currentVegetarian})
        break;
      case 'diet-vegan':
        let currentVegan = diet.vegan
        setDiet({vegan: !currentVegan})
        break;
      case 'exclude-holidays':
        let currentExcludeHolidays = excludeAllHolidays
        setExcludeAllHolidays(!currentExcludeHolidays)
        break;
    }
    console.log("event is::::: ", event)
    console.log("event.target is::::: ", event.target)
    console.log("event.targetid is::::: ", event.target.id)
    console.log("event.value is::::: ", event.target.value)
  }

  const clickTick = (event) => {
    event.persist();
    console.log("event is::::: ", event)
    console.log("event.target is::::: ", event.target)
    console.log("event.targetid is::::: ", event.target.id)
    console.log("event.value is::::: ", event.target.value)
  }

  return (
    <>
      <Form inline onSubmit={allergySubmit}>
          <Label for="allergies">Exclude these ingredients</Label><br />
        <FormGroup>
            <Input name="allergies" id="allergies" placeholder="e.g. Brussel Sprouts" />
            <Button color="danger" type="submit">Add Item</Button>
            <div className="submitted-allergies"><p>{extraAllergies}</p></div>
        </FormGroup>
      </Form>
      <Form>
        <FormGroup>
          <Label for="diet">Change your diet</Label>
          <CustomInput type="switch" id="diet-vegetarian" name="diet-vegetarian" label="Vegetarian" onChange={changeSwitch} value={diet.vegetarian ? 'on' : 'off'}/>
          <CustomInput type="switch" id="diet-vegan" name="diet-vegan" label="Vegan" onChange={changeSwitch} value={diet.vegan ? 'on' : 'off'}/>
        </FormGroup>
        <Label>Excluded courses</Label>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" id="main-dishes" onChange={clickTick}/>{' '}
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
            <Input type="checkbox" id="lunch" />{' '}
            Lunch
          </Label>
          <Label check>
            <Input type="checkbox" id="snacks" />{' '}
            Snacks
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
          <CustomInput type="switch" id="exclude-holidays" name="exclude-holidays" label="Exclude holiday dishes?" value={excludeAllHolidays ? 'on' : 'off'}/>
        </FormGroup>
        <Button color="danger">Search Again</Button>
      </Form>
      <p>This is state. Extra allergies: {extraAllergies}. Diet: {diet.vegetarian} and {diet.vegan}, excludedCourses: {excludedCourses}, excludeAllHolidays: {excludeAllHolidays}</p>
    </>
  );
}

export default FilterForm;