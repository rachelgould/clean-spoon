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

export { sendSMS }