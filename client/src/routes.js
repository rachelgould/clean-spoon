import React from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome.jsx'
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
const API = require('./lib/API.js');


class Routes extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
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
  )}

  componentDidMount() {
    this.getUser()
  }

  defaultState() {
    return {
      cookieName: 'rails-react-token-auth-jwt',
      email: undefined,
      jwt: undefined,
      user_id: undefined,
      pages: []
    }
  }

};

export default Routes;