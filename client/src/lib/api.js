import axios from 'axios';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
}

function sendSMS(id, number) {
  axios.get('api/text', {
    params: {
      q: number,
      id: id
    }
  }).then(response => {
    console.log(response)
  }).catch(error => console.log(error))
}

function getShoppingList(id, cb) {
  let url = 'api/lists/' + id
  axios.get(url).then(response => {
      return response
    })
    .then(checkStatus)
    .then(cb)
}

function getFridge(id, cb) {
  let url = 'api/fridges/' + id
  axios.get(url).then(response => {
      return response
    })
    .then(checkStatus)
    .then(cb)
}

function getProfile(id, cb) {
  let url = 'api/users/' + id
  axios.get(url).then(response => {
    return response
  })
  .then(checkStatus)
  .then(cb)
}


function updateProfile(id, userObj, cb) {
  console.log("These are the allergy details: " + userObj['allergies']);
  let url ='/api/users/' + id 
  axios.put(url, {
    name: userObj['name'],
    email: userObj['email'],
    vegan: userObj['vegan'], 
    vegetarian: userObj['vegetarian'], 
    allergies: userObj['allergies']
  }).then(checkStatus)
  .then(cb).catch(error => {
    console.log(error.message);
  })
}

function getRecipeID(recipeID, cb) {
console.log(recipeID)
  let url = '/api/recipes/' + recipeID
  axios.get(url).then(response => {
    return response
  }) 
  .then(checkStatus)
  .then(cb)
}

function getFavRecipes(id, cb) {
  let url = '/api/favRecipes/' + id;
  axios.get(url).then(response => 
    {
    return response
  }).then(checkStatus).then(cb)
}

function deleteFavRecipe(recipeID, cb) {
  let url = 'api/favRecipes/' + recipeID
  axios.delete(url)
  .then(checkStatus)
  .then(cb)
}

const getFridgeRecipes = async(id, cb) => { 
  let url = '/api/recipes/search/' + id;
  axios.get(url).then(response => {
    return response
  }).then(checkStatus).then(cb)
}

function setFridgeItem(id, itemName, cb) {
  let url = 'api/fridges/' + id
  axios.post(url, {
    name: itemName
  })
  .then(checkStatus)
  .then(cb)
}

function saveFavRecipe(id, recipeId, cb) {
  let url = 'api/favRecipes/' + id
  axios.post(url, {
    recipeId: recipeId
  })
  .then(checkStatus)
  .then(cb)
}

function deleteFridgeItem(id) {
  let url = 'api/fridges/' + id
  axios.delete(url)
  .then(checkStatus)
  // .then(cb)
}

function setShoppingListItem(id, itemName, cb) {
  let url = 'api/lists/' + id
  axios.post(url, {
    name: itemName
  })
  .then(checkStatus)
  .then(cb)
}

function bulkSetShoppingListItem(id, itemArray, cb) {
  let url = 'api/lists/' + id
  let sendData = new Promise(function(resolve, reject) {
    let numSent = 0;
    let numToSend = itemArray.length
    for (let item of itemArray) {
      let paramObject = {name: item}
      axios.post(url, paramObject).then(numSent++)
    }
    if (numSent === numToSend) {
      resolve('Added to shopping list')
    }
  })
  sendData.then(checkStatus)
  .then(cb)
}

function deleteShoppingListItem(id) {
  let url = 'api/lists/' + id
  axios.delete(url)
  .then(checkStatus)
}

const getYummlyResults = (id, params, cb) => {
  let url = 'api/recipes/search/' + id
  axios.get(url).then(response => {
    return response
  })
  .then(checkStatus)
  .then(cb)
}

export {
  sendSMS,
  getShoppingList,
  setShoppingListItem,
  bulkSetShoppingListItem,
  deleteShoppingListItem,
  getFridge,
  getProfile,
  setFridgeItem,
  deleteFridgeItem, 
  getRecipeID,
  getFridgeRecipes,
  updateProfile,
  getYummlyResults,
  getFavRecipes,
  saveFavRecipe,
  deleteFavRecipe
}