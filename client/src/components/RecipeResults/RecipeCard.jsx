import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

function RecipeCard(props) {
  let { recipeName, id, course, ingredients, rating, source, image } = props.recipe
  return (
    <div className="recipes-results-card">
      <Card>
        <CardImg top width="100%" src={image} alt={recipeName} />
        <CardBody>
          <CardTitle>{recipeName}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default RecipeCard;