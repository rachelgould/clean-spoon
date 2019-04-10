import React, { Component } from 'react';
import {Button, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import { getFavRecipes } from '../../lib/api.js';

class SavedRecipes extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    getFavRecipes(this.props.cookies.get('id'), (res) => {
      let favs = []
      console.log("GETTING favs" + JSON.stringify(res.data[0]));
      res.data.forEach((entry) => {
        favs.push({ 
          name: entry.name,
          url: entry.source.sourceSiteUrl, 
          id: entry.id
        })
      })
      console.log(favs);
    });
   
  }
 
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
        </CardBody>
      </Card>
      <br />

    </div>
    );
  }
}
export default SavedRecipes;



