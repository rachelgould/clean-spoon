import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Card, Button, CardTitle } from 'reactstrap';
import Table from './Table.jsx';
import Form from './Form.jsx';
import SMSForm from './SMSForm.jsx';

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
      <div id="itemList">
        
          <Card body >
            <CardTitle className="CardTitle">This is your Shopping List</CardTitle>
            <hr />  
            <Table characterData={foodItems} removeItem={this.removeItem} />
            <br />
            <Form handleSubmit={this.handleSubmit} />
            <br />
            <SMSForm cookies={this.props.cookies} />
          </Card>
        </div>
    
    );
  }
}
export default ShoppingList;


