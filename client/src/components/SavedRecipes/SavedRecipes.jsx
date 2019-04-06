import React, { Component } from 'react';
import {Button, ButtonGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';

class SavedRecipes extends Component {
 
  render() {
    return (   
    <div id="savedRecipes">
      <p>These are your Saved Recipes</p>
      <hr />
    
      <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>View Recipe</Button>
          <br />
          <center><a href="#">Remove</a></center>
        </CardBody>
      </Card>
      <br />

    </div>
    );
  }
}
export default SavedRecipes;



