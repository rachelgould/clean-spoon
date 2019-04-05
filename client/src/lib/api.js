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
    console.log('Received user details from server')
    console.log('The response was::::::::', response)
    return response
  })
  .then(checkStatus)
  .then(cb)
}

function setFridgeItem(id, itemName, cb) {
  let url = 'api/fridges/' + id
  axios.post(url, {
    name: itemName
  })
  .then(checkStatus)
  .then(cb)
}

function deleteFridgeItem(id, cb) {
  let url = 'api/fridges/' + id
  console.log("About to make delete request to this URL: ", url)
  axios.delete(url)
  .then(checkStatus)
  .then(cb)
}

export {
  sendSMS,
  getShoppingList,
  getFridge,
  getProfile,
  setFridgeItem,
  deleteFridgeItem
}