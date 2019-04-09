import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LikeButton from './LikeButton';

function RecipeCard(props) {
  let { recipeName, id, course, ingredients, rating, source, image, prepTime } = props.recipe;

  let [fridge, setFridge] = useState(false);

  useEffect(() => {
    if (props.currentFridge) {
      setFridge({fridge: props.currentFridge.foodItems});
    }
  }, [props.currentFridge])
  
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
  
  const matchingIngredients = () => {
    let fridgeItems = fridge.fridge.map(elem => elem.name)
    let matching = fridgeItems.filter(item =>  ingredients.includes(item))
    return matching
  }

  const newIngredients = (matchingFoods) => {
    let newFoods = ingredients.filter(item => !matchingFoods.includes(item))
    return newFoods
  } 

  const writeIngredientsText = () => {
    const shortenList = (array) => {
      if (array.length > 7) {
        let firstPart = array.slice(0,6).join(', ')
        let secondPart = array.slice(6).length
        return firstPart + ' and ' + secondPart + ' more.'
      }
      return array.join(', ') + '.'
    }
    if (fridge) {
      let listMatchingIngredients = shortenList(matchingIngredients());
      let listNewIngredients = shortenList(newIngredients(listMatchingIngredients));
      return (
      <>
        <p><strong>Your Ingredients: </strong>{listMatchingIngredients}</p>
        <p><strong>Not in Your Fridge: </strong>{listNewIngredients}</p>
      </>
      )
    }
    return (<p>Loading ingredients...</p>)
  }

  return (
    <div className="recipes-results-card">
      <Card>
        <CardImg top width="100%" src={image} alt={recipeName} />
        <CardBody>
          <CardTitle>{recipeName}</CardTitle>
          <CardSubtitle className="small"><p>Prep Time: {prepTimeInHrs ? prepTimeInHrs : prepTimeInMins + " mins"}</p></CardSubtitle>
          <CardText className="small">
            {writeIngredientsText()}
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