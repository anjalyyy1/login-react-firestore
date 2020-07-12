import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//components
import Login from "pages/login/container";
import Signup from "pages/signup/container";
import Profile from "pages/profile/container";

// check for all the private routes except for the public routes(route guarding)
const checkAuthSession = Component => {
  return localStorage.getItem("isUserLoggedIn") ? (
    Component
  ) : (
    <Redirect to="/" />
  );
};

const routes = props => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route
          path="/profile"
          exact
          render={props => checkAuthSession(<Profile {...props} />)}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default routes;
