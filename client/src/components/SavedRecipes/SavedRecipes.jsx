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

  refreshRecipes = () => {
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

  componentDidMount() {
    this.refreshRecipes()
  }

  removeItem = (index) => {
    const { favRecipes } = this.state
    deleteFavRecipe(index, (res) => {
      this.refreshRecipes()
    })
  }
 
  render() {
    return (   
      <Card body>
        <CardTitle><h2>Saved Recipes</h2></CardTitle>
        <hr />
        <Table cookies={this.props.cookies} characterData={this.state.favRecipes} removeItem={this.removeItem}  />
      </Card>
    );
  }
}
export default SavedRecipes;



