const fuzzyMatch = (str, pattern) => {
  return (new RegExp('\\b('+pattern+')\\b', 'i')).test(str);
};

const calcPrepTime = (prepTime) => {
  let prepTimeInMins = Math.ceil(prepTime/60);
  if (prepTimeInMins > 60) {
    let hours = Math.floor(prepTimeInMins / 60)
    let text = " hour and "
    if (hours > 1) {
      text = " hours and "
    }
    return hours + text + (prepTimeInMins % 60) + " mins"
  }
  return prepTimeInMins + " mins"
}

const getNewIngredients = (ingredients, matchingIngredients) => {
  let newFoods = ingredients.filter(item =>
    { 
      if (item === 'water' || item === 'salt' || item === 'pepper') {
        return false
      }
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

export {
  calcPrepTime,
  getNewIngredients
}