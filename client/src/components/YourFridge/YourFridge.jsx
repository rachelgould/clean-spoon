import React, { Component }  from 'react';
import { Card, CardTitle } from 'reactstrap';
import Form from './Form.jsx';
import IngredientCard from './IngredientCard.jsx';
import { getFridge, setFridgeItem, deleteFridgeItem } from '../../lib/api.js';

class YourFridge extends Component {
  
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
      if (this._isMounted) {
        this.setState({
          foodItems: newfoodItems
        })
      }
    })
  }

  componentDidMount()  {
    this._isMounted = true;
    // Get the fridge items from the server
    this.refreshFridge()
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  removeItem = fridgeIngredientId => {
    deleteFridgeItem(fridgeIngredientId)
    let index
    this.state.foodItems.forEach((item, i) => {
      if (item.id === fridgeIngredientId) {
        index = i
      }
    })
    let newItems = this.state.foodItems.slice(0)
    newItems.splice(index, 1)
    console.log(newItems)
    this.setState({
      foodItems: newItems
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
        <CardTitle>This is your Fridge</CardTitle>
        <hr />
        <div className="ingredient-list-container">{ingredients}</div>
        <br />
        <Form handleSubmit={this.handleSubmit} />
      </Card>
    );
  }
}
export default YourFridge;