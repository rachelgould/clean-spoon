import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LikeButton from './LikeButton';

function RecipeCard(props) {
  let { recipeName, id, course, ingredients, rating, source, image, prepTime } = props.recipe
  let prepTimeInMins = Math.ceil(prepTime/60)
  return (
    <div className="recipes-results-card">
      <Card>
        <CardImg top width="100%" src={image} alt={recipeName} />
        <CardBody>
          <CardTitle>{recipeName}</CardTitle>
          <CardSubtitle className="small"><p>Prep Time: {prepTimeInMins} mins</p></CardSubtitle>
          <CardText className="small">
            <p><strong>Your Ingredients:</strong> Placeholder</p>
            <p><strong>Not in Fridge:</strong> Placeholder</p>
            <a href="">See full recipe...</a>
          </CardText>
          <Button>Add to Shopping List</Button>
          <LikeButton recipe={id}/>
        </CardBody>
      </Card>
    </div>
  )
}

export default RecipeCard;