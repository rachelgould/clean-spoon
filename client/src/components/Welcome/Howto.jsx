import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

function Howto(props) {
  return (
    <div className="howto">
    <h1>How It Works</h1>
    <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle className="title">Enter Your Dietary Restrictions</CardTitle>
          <CardText>Visit your profile to enter your dietary restrictions and allergies.</CardText>
        </CardBody>
      </Card>
    <div>
      <img src="" alt="" />
      <h2></h2>
      <p>
      </p>
    </div>
    <div>
      <img src="" alt="" />
      <h2>Add Items to Your Fridge</h2>
      <p>Start inputting the ingredients you want to use up.
      </p>
    </div>
    <div>
      <img src="" alt="" />
      <h2>Browse Recipes & Get Cookin'</h2>
      <p>Browse recipes and make a shopping list if there's more you need.
      </p>
    </div>
    </div>
  )
}

export default Howto;