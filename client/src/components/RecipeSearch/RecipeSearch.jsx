import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import {
  Container, Card, CardText,
  CardTitle, Button } from 'reactstrap';
import { getFridge } from '../../lib/api.js';

class RecipeSearch extends Component {

   //default values for the time being
   state = {
    foodItems: []
  };

  componentDidMount()  {
    console.log("PROPS: ", this.props)
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

  render() {
    let arr = [];
    Object.keys(this.state.foodItems).map(key => {
      return arr.push(" " + this.state.foodItems[key].item);
    })

    return (    
      <div>
      <Navbar />
        <Container>
          <div id="recipeSearch">
            <Card body>
              <CardTitle><h1>Find Recipes Now!</h1></CardTitle>
              <CardText><b>Includes: </b> {arr + "  "} from your <a href="/fridge">fridge</a></CardText>
              <input />
              <br />
              <Button>Click Here to Search</Button>
              <br />
              <p><a href="#">Filter</a></p>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
export default RecipeSearch;


