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
      <div class="row" id="fridgeList">
        <div class="col-md-4">
          <Card body >
            <CardTitle>This is your fridge</CardTitle>

            <Table characterData={foodItems} removeItem={this.removeItem} />
            <br />
            <Form handleSubmit={this.handleSubmit} />

          </Card>
        </div>
      </div>
    );
  }
}
export default YourFridge;



