import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

function RecipesContainer(props) {
  const recipes = props.recipes
  const [currentPage, setCurrentPage] = useState(1);

  const makeCards = (recipes) => {
    return recipes
  }

  const cards = makeCards(recipes)

  return (
    <div className="recipes-results-container">{cards}</div>
  )
}

export default RecipesContainer;