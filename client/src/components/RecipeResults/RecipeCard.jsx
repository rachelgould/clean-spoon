import React, { useState, useEffect } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import LikeButton from './LikeButton';
import RecipePage from '../RecipePage/RecipePage.jsx';
import { getRecipeID, bulkSetShoppingListItem } from '../../lib/api.js';
import { calcPrepTime, getMatchingIngredients, getNewIngredients } from './recipeAnalysis.js';
import RecipeModal from '../RecipePage/RecipeModal';

function RecipeCard(props) {
  let { recipeName, id, course, ingredients, rating, source, image, prepTime } = props.recipe;
  let imagePlaceholder = 'https://images.unsplash.com/photo-1527756898251-203e9ce0d9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80';
  let [fridge, setFridge] = useState(false);
  let [ingredientLists, setIngredientLists] = useState(false);
  let [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (props.currentFridge) {
      let fridgeItems = props.currentFridge.foodItems
      setFridge({fridge: fridgeItems});
      setIngredientLists({
        matching: getMatchingIngredients(fridgeItems, ingredients),
        new: getNewIngredients(fridgeItems, ingredients)
      })
    }
  }, [props.currentFridge])

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
      let listMatchingIngredients = shortenList(ingredientLists.matching);
      let listNewIngredients = shortenList(ingredientLists.new);
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

  const addRecipeToShoppingList = () => {
    bulkSetShoppingListItem(props.cookies.get('id'), [...ingredientLists.new], (res) => {
      console.log("Added items to the shopping list")
    })
  }

  const recipeLink = (event) => {
    event.preventDefault();
    modalToggle();
  }

  const modalToggle = () => {
    let currentState = modalActive;
    setModalActive(!currentState);
  }

  const prepTimeString = calcPrepTime(prepTime)

  return (
    <div className="recipes-results-card">
      <Card>
        <CardImg top width="100%" src={image || imagePlaceholder} alt={recipeName} />
        <CardBody>
          <CardTitle>{shortenRecipeName()}</CardTitle>
          <CardSubtitle className="small"><p>Prep Time: {prepTimeString}</p></CardSubtitle>
          <CardText className="small">
            {writeIngredientsText()}
            <a href="#" onClick={recipeLink}>See full recipe...</a>
          </CardText>
          <Button onClick={addRecipeToShoppingList}>Add to Shopping List</Button>
          <LikeButton recipe={id}/>
        </CardBody>
      </Card>
      <RecipeModal id={id} recipe={props.recipe} haveIngredients={ingredientLists.matching} needIngredients={ingredientLists.new} prepTime={prepTimeString} active={modalActive} toggle={modalToggle}/>
    </div>
  )
}

export default RecipeCard;