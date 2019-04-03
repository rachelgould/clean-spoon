import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome.jsx'
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import RecipeSearch from './components/RecipeSearch/RecipeSearch.jsx';

class Routes extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }
  constructor (props) {
    super(props);
    const { cookies } = props;
    this.state = {
      id: cookies.get('id') || '0'
    }
  }
  giveIdCookie() {
    if (this.state.id === '0') {
      const { cookies } = this.props;
   
      cookies.set('id', '1', { path: '/' });
      this.setState({ id });
    }
  }
  render() {
    const { id } = this.state;

    return (
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/search" component={RecipeSearch} />
            <Route 
              exact path="/recipes"
              render={(routeProps) => (
              <Dashboard {...routeProps} view="savedRecipes" />
              )}
            />
            <Route 
              exact path="/fridge"
              render={(routeProps) => (
              <Dashboard {...routeProps} view="yourFridge" />
              )}
            />
            <Route 
              exact path="/list"
              render={(routeProps) => (
              <Dashboard {...routeProps} view="shoppingList" />
              )}
            />
        </Switch>   
      </BrowserRouter>
    )
  }
};

export default withCookies(Routes);