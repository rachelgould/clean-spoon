import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';
import Table from './Table.jsx'
import Form from './Form.jsx'

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

  render() {

    const { foodItems } = this.state;

    return (
      <div class="row" id="shoppingList">
        <div class="col-md-4">

          <Card body >
            <CardTitle className="CardTitle">This is your Shopping List</CardTitle>
            
        
            <Table characterData={foodItems} removeItem={this.removeItem} />
            <br />
            <Form handleSubmit={this.handleSubmit} />
            

             <br />
             <div id="smsParent">
             <div id="sms">
            <InputGroup size="lg">
              <Input />
              <InputGroupAddon addonType="append">
                <Button color="danger">Send to SMS</Button>
              </InputGroupAddon>
            </InputGroup>
            </div>
            </div>

          </Card>

        </div>
      </div>
    );
  }
}
export default ShoppingList;


