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

  refreshFridge = () => {
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

  componentDidMount()  {
    this.refreshFridge()
  }

  componentDidUpdate(prevProps) {
    console.log('Previous props: ', prevProps)
    console.log("current props: ", this.props)
    if (this.props.promptReload !== prevProps.promptReload) {
      this.refreshFridge()
    }  
  }

  performSearch = (event) => {
    event.persist();
    event.preventDefault();
    this.props.onSubmit(event);
  }

  recipeText = () => {
    let arr = [];
    if (this.state.foodItems.length !== 0) {
      Object.keys(this.state.foodItems).map(key => {
        return arr.push(this.state.foodItems[key].item);
      })
      return (<CardText><b>Includes:</b> {arr.join(', ')} from your <a href="/fridge">fridge</a></CardText>)
    }
    return (<CardText>There's nothing in your <a href="/fridge">fridge</a></CardText>)
  }

  render() {

    return (
      <Jumbotron className="recipe-search-container" fluid>
        <div id="recipeSearch" className="search-card">
          <Card body>
            <CardTitle><h1>Find Recipes Now!</h1></CardTitle>
            {this.recipeText()}
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


