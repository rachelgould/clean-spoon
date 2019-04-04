import React, { Component } from 'react';
import {Card, CardTitle} from 'reactstrap';
import Table from './Table.jsx';
import Form from './Form.jsx';
import { getFridge } from '../../lib/api.js';


class YourFridge extends Component {
  
  //default values for the time being
  state = {
    foodItems: []
  };

  componentDidMount()  {
    // Get the fridge items from the server
    getFridge(this.props.cookies.get('id'), (results) => {
      let newfoodItems = []
      results.data.forEach((entry) => {
        newfoodItems.push({ 
          item: entry.name, 
          image: entry.image
        })
      })
      this.setState({
        foodItems: newfoodItems
      })
    })
  }

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



