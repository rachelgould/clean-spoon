import React, { Component } from 'react';
import {Card, CardTitle} from 'reactstrap';
import Table from './Table.jsx'
import Form from './Form.jsx'


class YourFridge extends Component {
  
  //default values for the time being
  state = {
    foodItems: [
      {
        item: 'Milk'
      },
      {
        item: 'Cheese'
      },
      {
        item: 'Strawberries'
      },
      {
        item: 'Butter'
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
            <CardTitle>This is your fridge</CardTitle>
            <hr />
            <Table characterData={foodItems} removeItem={this.removeItem} />
            <br />
            <Form handleSubmit={this.handleSubmit} />
          </Card>
        </div>
    );
  }
}
export default YourFridge;



