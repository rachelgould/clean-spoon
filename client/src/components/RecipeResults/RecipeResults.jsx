import React, { useState } from 'react';
import Navbar from '../Navbar/nav.jsx';
import RecipesContainer from './RecipesContainer';
import SearchAgain from './SearchAgain';
import SideBar from './SideBar';
import recipeSample from './recipesample'; // This will be replaced with real data

function RecipeResults(props) {
  // const recipesJSON = JSON.stringify(recipeSample)
  // Add hook for loading state
  const [recipes, setRecipes] = useState(processRecipeData(recipeSample));

  function processRecipeData(data) {
    let processed = [];
    data.matches.forEach((recipe) => {
      processed.push({
        recipeName: recipe.recipeName,
        id: recipe.id,
        course: recipe.attributes.course,
        ingredients: recipe.ingredients,
        rating: recipe.rating,
        source: recipe.sourceDisplayName,
        image: recipe.imageUrlsBySize['90']
      })
    })
    return processed;
  }

  return (
    <div className="recipe-results">
      <Navbar />
      <RecipesContainer recipes={recipes} />
      <SearchAgain />
      <SideBar show="false"/>
    </div>
  )
}

export default RecipeResults;