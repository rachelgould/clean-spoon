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
  console.log(`Submitting the text message for user id ${id} to this phone number: ${number}`)
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
      console.log('Received shopping list from server')
      console.log('The response was::::::', response)
      return response
    })
    .then(checkStatus)
    .then(cb)
}

function getFridge(id, cb) {
  let url = 'api/fridges/' + id
  axios.get(url).then(response => {
      console.log('Received fridge items from server')
      console.log('The response was::::::', response)
      return response
    })
    .then(checkStatus)
    .then(cb)
}

function getProfile(id, cb) {
  let url = 'api/users/' + id
  axios.get(url).then(response => {
    // console.log('Received user details from server')
    // console.log('The response was::::::::', response)
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
    vegan: userObj['vegetarian'], 
    vegetarian: userObj['vegan'], 
    allergies: userObj['allergies']
  }).then(checkStatus)
  .then(cb).catch(error => {
    console.log(error.message);
  })
}

function getRecipeID(recipeID, cb) {
console.log(recipeID)
  let url = '/api/recipes/' + recipeID //'Hot-Dogs-with-Krautslaw-894904'
  axios.get(url).then(response => {
    console.log('Received recipe details from server')
    console.log('The response was ------->>>>>', response)
    return response
  }) 
  .then(checkStatus)
  .then(cb)
}

const getFridgeRecipes = async(id, cb) => { // --------------------------REFACTOR ME----------------------------------------
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

function deleteFridgeItem(id) {
  let url = 'api/fridges/' + id
  console.log("About to make delete request to this URL: ", url)
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

function deleteShoppingListItem(id) {
  let url = 'api/lists/' + id
  console.log("About to make delete request to this URL: ", url)
  axios.delete(url)
  .then(checkStatus)
}

const getYummlyResults = (id, params, cb) => {
  console.log("Running the yummly search")
  let url = 'api/recipes/search/' + id
  axios.get(url).then(response => {
    console.log("In response block of api.js")
    return response
  })
  .then(checkStatus)
  .then(cb)
}

export {
  sendSMS,
  getShoppingList,
  setShoppingListItem,
  deleteShoppingListItem,
  getFridge,
  getProfile,
  setFridgeItem,
  deleteFridgeItem, 
  getRecipeID,
  getFridgeRecipes,
  updateProfile,
  getYummlyResults
}