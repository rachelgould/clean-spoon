import React, { Component } from 'react';
import Navbar from '../Navbar/nav.jsx';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class RecipeSearch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (    
      <div>
      <Navbar />
        <Container>
          <div id="recipeSearch">
            <Card body>
              <CardTitle><h1>Find Recipes Now!</h1></CardTitle>
              <CardText><b>Includes: </b> Peppers, Chicken, Spinach and 5 other items in your <a href="/fridge">fridge</a></CardText>
              <input />
              <br />
              <Button>Click Here to Search</Button>
            </Card>
          </div>
        </Container>
      </div>
    );
  }
}
export default RecipeSearch;


