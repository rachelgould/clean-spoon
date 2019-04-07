import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

function RecipesContainer(props) {
  const recipes = props.recipes

  const makeCards = (recipes) => {
    return recipes.map((recipe) => {
      return (
        <RecipeCard recipe={recipe} key={recipe.id} />
      )
    })
  }

  const cards = makeCards(recipes);

  return (
    <div className="recipes-results-container">{cards}</div>
  )
}

export default RecipesContainer;