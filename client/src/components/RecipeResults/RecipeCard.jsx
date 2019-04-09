import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LikeButton from './LikeButton';
import { calcPrepTime } from './recipeAnalysis.js';

function RecipeCard(props) {
  let { recipeName, id, course, ingredients, rating, source, image, prepTime } = props.recipe;
  let [fridge, setFridge] = useState(false);
  let imagePlaceholder = 'https://images.unsplash.com/photo-1527756898251-203e9ce0d9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80';

  useEffect(() => {
    if (props.currentFridge) {
      setFridge({fridge: props.currentFridge.foodItems});
    }
  }, [props.currentFridge])
  
  const fuzzyMatch = (str, pattern) => {
    return (new RegExp('\\b('+pattern+')\\b', 'i')).test(str);
  };

  const matchingIngredients = () => {
    let fridgeItems = fridge.fridge.map(elem => elem.name)
    let matching = fridgeItems.filter(item =>
      { 
        for (let thing of ingredients) {
          if (fuzzyMatch(thing, item)) {
            return true
          }
        }
      }
    )
    return matching
  }

  const newIngredients = (matchingIngredients) => {
    let newFoods = ingredients.filter(item =>
      { 
        for (let thing of matchingIngredients) {
          if (fuzzyMatch(item, thing)) {
            return false
          }
        }
        return true
      }
    )
    return newFoods
  } 

  const writeIngredientsText = () => {
    const shortenList = (array) => {
      if (array.length === 0) {
        return 'none.'
      }
      if (array.length > 7) {
        let firstPart = array.slice(0,6).join(', ')
        let secondPart = array.slice(6).length
        return firstPart + ' and ' + secondPart + ' more.'
      }
      return array.join(', ') + '.'
    }
    if (fridge) {
      let listMatchingIngredients = shortenList(matchingIngredients());
      let listNewIngredients = shortenList(newIngredients(matchingIngredients()));
      return (
      <>
        <p><strong>Your Ingredients: </strong>{listMatchingIngredients}</p>
        <p><strong>Not in Your Fridge: </strong>{listNewIngredients}</p>
      </>
      )
    }
    return (<p>Loading ingredients...</p>)
  }

  const shortenRecipeName = () => {
    if (recipeName.length > 40) {
      let splitName = recipeName.split(' ')
      let finalString = ''
      for (let i = 0; i < splitName.length; i++) {
        if ((finalString + ' ' + splitName[i]).length <= 40) {
          finalString += ' ' + splitName[i]
        }
      }
      return finalString + '...'
    }
    return recipeName
  }

  return (
    <div className="recipes-results-card">
      <Card>
        <CardImg top width="100%" src={image || imagePlaceholder} alt={recipeName} />
        <CardBody>
          <CardTitle>{shortenRecipeName()}</CardTitle>
          <CardSubtitle className="small"><p>Prep Time: {calcPrepTime(prepTime)}</p></CardSubtitle>
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