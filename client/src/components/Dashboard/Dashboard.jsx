import React, { Component } from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import { Redirect } from 'react-router';
import Navbar from '../Navbar/nav.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import SavedRecipes from '../SavedRecipes/SavedRecipes.jsx';
import YourFridge from '../YourFridge/YourFridge.jsx';
import RecipeSearch from '../RecipeSearch/RecipeSearch.jsx';
import LoadingIndicator from '../Loading/LoadingIndicator';
import { getYummlyResults } from '../../lib/api.js';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render: this.props.view,
      searchResults: null,
      isLoading: false,
      incrementSearch: 0
    };
  }

  handleKeyPress = (compName, event) => {
    this.setState({ render: compName });
  }

  updateSearchBox = () => {
    let currentIncrementer = this.state.incrementSearch
    let newNum = currentIncrementer + 1
    this.setState({ 
      render: 'yourFridge', incrementSearch: newNum
    })
  }

  _renderSubComp() {
    switch (this.state.render) {
      case 'savedRecipes': return <SavedRecipes cookies={this.props.cookies} />
      case 'yourFridge': return <YourFridge cookies={this.props.cookies} onUpdate={this.updateSearchBox} />
      case 'shoppingList': return <ShoppingList cookies={this.props.cookies} />
      default : return <YourFridge cookies={this.props.cookies} onUpdate={this.updateSearchBox} />
    }
  }

  yummlySearch = (event) => {
    this.setState({
      isLoading: true
    })
    getYummlyResults(this.props.cookies.get('id'), null, (results) => {
      let jsonResults = JSON.parse(JSON.stringify(results))
      this.setState({searchResults: jsonResults})
    })
  }

  render() { 
    if (this.state.searchResults) {
      return(
        <Redirect push 
          to={{
            pathname: "/results",
            state: { 
              searchResults: this.state.searchResults
            }
          }}
        />)
    }
    if (this.state.isLoading) {
      return (
        <LoadingIndicator />
      )
    }
    return (
      <div className="dashboard">
        <Navbar />
        <RecipeSearch cookies={this.props.cookies} onSubmit={this.yummlySearch} promptReload={this.state.incrementSearch}/>
        <div className="text-center" id="topMargin">
          <ButtonGroup size="lg" className="block">
            <Button color="danger" onClick={this.handleKeyPress.bind(this, 'savedRecipes')}>Saved Recipes</Button>
            <Button color="danger" onClick={this.handleKeyPress.bind(this, 'yourFridge')}>Your Fridge</Button>
            <Button color="danger" onClick={this.handleKeyPress.bind(this, 'shoppingList')}>Shopping List</Button>       
          </ButtonGroup>
          {this._renderSubComp()}
        </div>
      </div>
    );
  }
}
export default Dashboard;


