import React, { useState } from 'react';
import Navbar from '../Navbar/nav.jsx';
import RecipesContainer from './RecipesContainer';
import SearchAgain from './SearchAgain';
import SideBar from './SideBar';
import recipeSample from './recipesample'; // This will be replaced with real data

function RecipeResults(props) {
  const recipesJSON = JSON.stringify(recipeSample)
  // Add hook for loading state
  const [recipes, setRecipes] = useState(recipesJSON);

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