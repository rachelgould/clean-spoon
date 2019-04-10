import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import { getFavRecipes, deleteFavRecipe} from '../../lib/api.js';
import Table from './Table'

class SavedRecipes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      favRecipes: []
    }
  }

  componentDidMount() {

    getFavRecipes(this.props.cookies.get('id'), (res) => {
      let favs = []
     //  console.log("GETTING favs" + JSON.stringify(res.data[0]));
      res.data.forEach((entry) => {
        favs.push({ 
          name: entry.name,
          url: entry.source.sourceRecipeUrl, 
          id: entry.id
        })
      })
      this.setState({
        favRecipes: favs,
      })
      console.log(this.state.favRecipes);
    });
   
  }

  removeItem = index => {


    //deleteFavRecipe(this.props.cookies.get('id'))
    const { favRecipes } = this.state
    console.log("HERE" + JSON.stringify(favRecipes))
    this.setState({
      favRecipes: favRecipes.filter((character, i) => {
        return i !== index
      }),
    })
  }
 
  render() {
    return (   
    <div id="savedRecipes">
      <p>These are your Saved Recipes</p>
      <hr />
    
      <Card>
        <CardBody>
     <Table characterData={this.state.favRecipes} removeItem={this.removeItem}  /> 
        </CardBody>
      </Card>
      <br />

    </div>
    );
  }
}
export default SavedRecipes;



