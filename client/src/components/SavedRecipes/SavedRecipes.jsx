import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';
import { getFavRecipes, deleteFavRecipe} from '../../lib/api.js';
import Table from './Table'
import SmallLoader from '../Loading/SmallLoader';

class SavedRecipes extends Component {

  constructor(props) {
    super(props)
    this.state = {
      favRecipes: [],
      isLoading: false
    }
  }

  refreshRecipes = () => {
    this.setState({
      isLoading: true
    })
    getFavRecipes(this.props.cookies.get('id'), (res) => {
      let favs = []
      res.data.forEach((entry) => {
        favs.push({ 
          name: entry.name,
          url: entry.source.sourceRecipeUrl, 
          id: entry.id
        })
      })
      this.setState({
        favRecipes: favs,
        isLoading: false
      })
    });
  }

  componentDidMount() {
    this.refreshRecipes()
  }

  removeItem = (index) => {
    deleteFavRecipe(index, (res) => {
      this.refreshRecipes()
    })
  }
 
  render() {
    return (   
      <Card body>
        <CardTitle><h2>Saved Recipes</h2></CardTitle>
        <hr />
        <div className="savedRecipesParent">
          <div className="savedRecipesChild">
          {this.state.isLoading ? <SmallLoader /> : <Table cookies={this.props.cookies} characterData={this.state.favRecipes} removeItem={this.removeItem}  />} 
          </div>
          </div>
      </Card>
    );
  }
}
export default SavedRecipes;



