import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';
import Table from './Table.jsx'
import Form from './Form.jsx'
import SMSForm from './SMSForm.jsx'
import axios from 'axios';

class ShoppingList extends Component {

  //default values for the time being
  state = {
    foodItems: [
      {
        item: 'Chicken'
      },
      {
        item: 'Lima Beans'
      },
      {
        item: 'Rice'
      },
      {
        item: 'Youghurt'
      }
    ]
  };

  removeItem = index => {
    const { foodItems } = this.state

    this.setState({
      foodItems: foodItems.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = item => {
    this.setState({ foodItems: [...this.state.foodItems, item] })
  }

  smsSubmit = (num) => {
    console.log("Submitting the text message")
    axios.get('api/text', {
      params: {
        q: num,
        list: this.state.foodItems
      }
    }).then(response => {
      console.log(response)
    }).catch(error => console.log(error))
  }

  render() {

    const { foodItems } = this.state;

    return (
      <div className="row" id="shoppingList">
        <div className="col-md-4">

          <Card body >
            <CardTitle className="CardTitle">This is your Shopping List</CardTitle>
            
        
            <Table characterData={foodItems} removeItem={this.removeItem} />
            <br />
            <Form handleSubmit={this.handleSubmit} />
            <br />
            <SMSForm handleSubmit={this.smsSubmit}/>
          </Card>

        </div>
      </div>
    );
  }
}
export default ShoppingList;


