import axios from 'axios';

// Send the user's shopping list to the specified phone number
export const submitSMS = (num, id) => {
  console.log("Submitting the text message")
  axios.get('api/text', {
    params: {
      q: num,
      id: id
    }
  }).then(response => {
    console.log(response)
  }).catch(error => console.log(error))
}
