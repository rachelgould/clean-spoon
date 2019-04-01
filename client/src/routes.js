import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Welcome from './components/Welcome/Welcome.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dashboard" component={Dashboard} />
    </Switch>   
    </BrowserRouter>
);

export default Routes;