import React, { useState } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LikeButton from './LikeButton';

function RecipeCard(props) {
  let { recipeName, id, course, ingredients, rating, source, image, prepTime } = props.recipe;

  let fridge = null;

  // There might be a delay before the fridge items get passed in
  if (props.currentFridge) {
    fridge = props.currentFridge.foodItems;
  }
  
  let prepTimeInMins = Math.ceil(prepTime/60);
  let prepTimeInHrs = null;
  if (prepTimeInMins > 60) {
    let hours = Math.floor(prepTimeInMins / 60)
    let text = " hour and "
    if (hours > 1) {
      text = " hours and "
    }
    prepTimeInHrs = hours + text + (prepTimeInMins % 60) + " mins"
  }
  
  const listMatchingIngredients = () => {
    let ingredients = [];
    return ingredients;

  }
  const listNewIngredients = () => {
    let ingredients = [];
    return ingredients;
  }

  const ingredientsText = () => {
    return (
    <>
      <p><strong>Your Ingredients:</strong>{listMatchingIngredients}</p>
      <p><strong>Not in Fridge:</strong>{listNewIngredients}</p>
    </>
    )
  }

  return (
    <div className="recipes-results-card">
      <Card>
        <CardImg top width="100%" src={image} alt={recipeName} />
        <CardBody>
          <CardTitle>{recipeName}</CardTitle>
          <CardSubtitle className="small"><p>Prep Time: {prepTimeInHrs ? prepTimeInHrs : prepTimeInMins + " mins"}</p></CardSubtitle>
          <CardText className="small">
            {fridge ? ingredientsText : "Loading Ingredients..."}
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