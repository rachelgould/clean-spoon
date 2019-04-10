import React, { Component } from 'react';
import {
  Card, CardText, CardTitle, Button, Jumbotron, Form, Input 
  } from 'reactstrap';
import { getFridge } from '../../lib/api.js';

class RecipeSearch extends Component {
   //default values for the time being
   state = {
    foodItems: [],
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

  performSearch = (event) => {
    event.persist();
    event.preventDefault();
    console.log("About to submit search!")
    this.props.onSubmit(event);
  }

  render() {
    let arr = [];
    Object.keys(this.state.foodItems).map(key => {
      return arr.push(" " + this.state.foodItems[key].item);
    })

    return (
      <Jumbotron className="recipe-search-container" fluid>
        <div id="recipeSearch" className="search-card">
          <Card body>
            <CardTitle><h1>Find Recipes Now!</h1></CardTitle>
            <CardText><b>Includes: </b> {arr + "  "} from your <a href="/fridge">fridge</a></CardText>
            <Form onSubmit={this.performSearch}>
            <Button type="submit">Click Here to Search</Button>
            </Form>
            <br />
          </Card>
        </div>
      </Jumbotron>
    );
  }
}
export default RecipeSearch;


