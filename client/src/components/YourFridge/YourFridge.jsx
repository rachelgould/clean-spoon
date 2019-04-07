import React, { Component }  from 'react';
import { Card, CardTitle } from 'reactstrap';
import Form from './Form.jsx';
import IngredientCard from './IngredientCard.jsx';
import LoadingIndicator from '../Loading/LoadingIndicator';
import { getFridge, setFridgeItem } from '../../lib/api.js';

class YourFridge extends Component {
  state = {
    foodItems: [],
    isLoading: true
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
  
  removeItem = index => {
    // Must be edited to call DB
    const { foodItems } = this.state 
    this.setState({
      foodItems: foodItems.filter((character, i) => {
        return i !== index
      }),
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

    if (this.state.isLoading) {
      return (<LoadingIndicator page="your fridge" />)
    }

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