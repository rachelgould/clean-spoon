import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from '../Navbar/nav.jsx';
import './Dashboard.css';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import SavedRecipes from '../SavedRecipes/SavedRecipes.jsx';
import YourFridge from '../YourFridge/YourFridge.jsx';
import {Button, ButtonGroup} from 'reactstrap';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {render: ''};
  }

  handleKeyPress = (compName, event) => {
    console.log(compName);
    this.setState({ render: compName });
  }

  _renderSubComp() {
    switch (this.state.render) {
      case 'savedRecipes': return <SavedRecipes />
      case 'yourFridge': return <YourFridge />
      case 'shoppingList': return <ShoppingList />
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="text-center" id="topMargin">
          <ButtonGroup size="lg" class="block">
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



