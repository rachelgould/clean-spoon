import React, { Component } from 'react';
import { Button, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
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
        isLoading: false
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
    <div id="savedRecipes">
      <Card>
        <br/>
      <p>These are your Saved Recipes</p>
        <CardBody>
          <div className="savedRecipesParent">
          <div className="savedRecipesChild">
          {this.state.isLoading ? <SmallLoader /> :  <Table cookies={this.props.cookies} characterData={this.state.favRecipes} removeItem={this.removeItem}  />} 
          {/* <Table cookies={this.props.cookies} characterData={this.state.favRecipes} removeItem={this.removeItem}  />  */}
          </div>
          </div>
        </CardBody>
      </Card>
      <br />

    </div>
    );
  }
}
export default SavedRecipes;



