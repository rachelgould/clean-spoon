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
  componentDidMount() {
    if (this.state.id === '0') {
      let id = 1; // Changes when there are multiple users
      const { cookies } = this.props;
   
      cookies.set('id', id, { path: '/' });
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

            <Route 
              exact path="/profile"
              render={(routeProps) => (
              <Profile {...routeProps} cookies={this.props.cookies} />
              )}
            />

            {/* <Route exact path="/search" component={RecipeSearch} /> */}

            <Route 
              exact path="/search"
              render={(routeProps) => (
              <RecipeSearch {...routeProps} cookies={this.props.cookies} />
              )}
            />


            
            <Route 
              exact path="/recipes"
              render={(routeProps) => (
              <Dashboard {...routeProps} view="savedRecipes" cookies={this.props.cookies} />
              )}
            />
            <Route 
              exact path="/fridge"
              render={(routeProps) => (
              <Dashboard {...routeProps} view="yourFridge" cookies={this.props.cookies} />
              )}
            />
            <Route 
              exact path="/list"
              render={(routeProps) => (
              <Dashboard {...routeProps} view="shoppingList" cookies={this.props.cookies} />
              )}
            />
        </Switch>   
      </BrowserRouter>
    )
  }
};

export default withCookies(Routes);