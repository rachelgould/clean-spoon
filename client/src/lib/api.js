import axios from 'axios';

// Pings Rails API to send the grocery list for the specified user to the specified phone number
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
  let url = `api/lists/${id}`
  axios.get(url).then(response => {
    console.log('Received shopping list from server')
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(cb)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
}

function parseJSON(response) {
  return response.json();
}

export { sendSMS, getShoppingList }