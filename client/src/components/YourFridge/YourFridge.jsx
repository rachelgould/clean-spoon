import React, { Component } from 'react';
import { Card, CardTitle, Container, Row, Col } from 'reactstrap';
import Table from './Table.jsx';
import Form from './Form.jsx';
import IngredientCard from './IngredientCard.jsx';
import { getFridge, setFridgeItem, deleteFridgeItem } from '../../lib/api.js';


class YourFridge extends Component {
  
  //default values for the time being
  state = {
    foodItems: []
  };

  refreshFridge = () => {
    getFridge(this.props.cookies.get('id'), (results) => {
      let newfoodItems = []
      results.data.forEach((entry) => {
        newfoodItems.push({ 
          item: entry.name, 
          image: entry.image,
          id: entry.id
        })
      })
      this.setState({
        foodItems: newfoodItems
      })
    })
  }

  componentDidMount()  {
    // Get the fridge items from the server
    this.refreshFridge()
  }
  
  removeItem = id => {
    deleteFridgeItem(id, (results) => {
      if (results.status === 200) {
        let newState = this.state.foodItems;
        let matchingIndex = newState.map((element) => element.id).indexOf(id)
        if (matchingIndex !== -1) {
          newState.splice(matchingIndex, 1)
        }
        this.setState({
          foodItems: newState
        })
      } else {
        alert("There was a problem. Please try again.")
      }
    })
  }
  
  handleSubmit = item => {
    setFridgeItem(this.props.cookies.get('id'), item.name, (results) => {
      if (results.status === 200) {
        this.refreshFridge()
      } else {
        alert("There was a problem. Please try again.")
      }
    })
  }
  
  makeRows = () => {
    const { foodItems } = this.state
    if (foodItems.length > 0) {
      return foodItems.map((entry, index) => {
        return (<IngredientCard 
          name={entry.item} 
          image={entry.image} 
          key={index}
          id={entry.id} 
          removeItem={this.removeItem} />)
      });
    } else {
      return ''
    }
  }

  render() {
    const ingredients = this.makeRows();

    return (
      <Card body >
        <CardTitle>This is your fridge</CardTitle>
        <hr />
        <div className="ingredient-list-container">{ingredients}</div>
        {/* <Table characterData={foodItems} removeItem={this.removeItem} /> */}
        <br />
        <Form handleSubmit={this.handleSubmit} />
      </Card>
    );
  }
}
export default YourFridge;