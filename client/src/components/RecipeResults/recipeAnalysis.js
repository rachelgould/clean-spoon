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

const getMatchingIngredients = (fridge, ingredients) => {
  console.log("The fridge object we're trying to map is this: ", fridge)
  let fridgeItems = fridge.map(elem => elem.name)
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

const getNewIngredients = (fridge, ingredients) => {
  let matchingIngredients = getMatchingIngredients(fridge, ingredients);
  let newFoods = ingredients.filter(item =>
    { 
      if (item === 'water') {
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
  getMatchingIngredients,
  getNewIngredients
}