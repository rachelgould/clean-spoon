import { useCookies } from 'react-cookie';
import axios from 'axios';
const cookie = useCookies(['id'])

module.exports = {
  // Send the user's shopping list to the specified phone number
  submitSMS: function(num) {
    console.log("Submitting the text message")
    axios.get('api/text', {
      params: {
        q: num,
        id: cookie
      }
    }).then(response => {
      console.log(response)
    }).catch(error => console.log(error))
  }
}
