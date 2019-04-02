import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function Howto(props) {
  return (
    <div className="howto">
    <h1>How It Works</h1>
    <div className="steps">
      <Card className="card">
        <CardImg top src="https://media-public.canva.com/MACy4RRI2V8/5/screen.svg" alt="Peanut" />
        <CardBody>
          <CardTitle className="title">Enter Your Dietary Restrictions</CardTitle>
          <CardText>Visit your profile to enter your dietary restrictions and allergies.</CardText>
        </CardBody>
      </Card>
      <Card className="card">
        <CardImg top src="https://media-public.canva.com/MAC29W5cpFo/1/screen.svg" alt="Peanut" />
        <CardBody>
          <CardTitle className="title">Add Items to Your Fridge</CardTitle>
          <CardText>Start inputting the ingredients you want to use up.</CardText>
        </CardBody>
      </Card>
      <Card className="card">
        <CardImg top src="https://media-public.canva.com/MABnsH3AhsE/1/screen.svg" alt="Peanut" />
        <CardBody>
          <CardTitle className="title">Browse Recipes & Get Cookin'</CardTitle>
          <CardText>Browse recipes and make a shopping list if there's more you need.</CardText>
        </CardBody>
      </Card>
    </div>
  </div>
  )
}

export default Howto;