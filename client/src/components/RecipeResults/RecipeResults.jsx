import React, { useState } from 'react';
import Navbar from '../Navbar/nav.jsx';
import RecipesContainer from './RecipesContainer';
import SearchAgain from './SearchAgain';
import SideBar from './SideBar';
import { getFridgeRecipe} from '../../lib/api.js';

function RecipeResults(props) {

  // Add hook for loading state

  let [recipes, setRecipes] = useState(props.location.state.searchResults);

  console.log("recipes::::::::>", recipes)

  function processRecipeData(recipes) {
    let processed = [];
    recipes.data.matches.forEach((recipe) => {
      processed.push({
        recipeName: recipe.recipeName,
        id: recipe.id,
        course: recipe.attributes.course,
        ingredients: recipe.ingredients,
        rating: recipe.rating,
        source: recipe.sourceDisplayName,
        image: recipe.imageUrlsBySize['90'],
        prepTime: recipe.totalTimeInSeconds
      })
    })
    return processed;
  }

  let processedRecipes = processRecipeData(recipes)

  return (
    <div className="recipe-results">
      <Navbar />
      <RecipesContainer recipes={processedRecipes} />
      <SearchAgain />
      <SideBar />
    </div>
  )
}

export default RecipeResults;