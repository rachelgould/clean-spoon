import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

function RecipesContainer(props) {
  const [currentPage, setCurrentPage] = useState(1);
  
  return (
    <div className="recipes-results-container"> RECIPES IN HERE! </div>
  )
}

export default RecipesContainer;