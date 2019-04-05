import React, { useState } from 'react';
import Navbar from '../Navbar/nav.jsx';
import recipeSample from './recipesample';

function RecipeResults(props) {
  const recipesJSON = JSON.stringify(recipeSample)
  const [recipes, setRecipes] = useState(recipesJSON);

  return (
    <div className="recipe-results">
      <Navbar />
      <p>{recipes}</p>
    </div>
  )
}

export default RecipeResults;