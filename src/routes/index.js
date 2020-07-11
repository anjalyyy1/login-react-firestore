import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

//components
import Login from "pages/login/container";
import Signup from "pages/signup/container";
import Profile from "pages/profile/container";

const checkAuthSession = (Component, auth) => {
  return localStorage.getItem("isUserLoggedIn") ? (
    Component
  ) : (
    <Redirect to="/" />
  );
};

const routes = props => {
  let auth = props.auth;

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route
          path="/profile"
          exact
          render={props => checkAuthSession(<Profile {...props} />, auth)}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

const mapStatetoProps = state => {
  const { firebase } = state;
  return {
    ...firebase
  };
};

export default connect(mapStatetoProps)(routes);

// const checkAuthSession = (Component, props, auth, isProtectedRoute = false) => {
//   let checkIfUserLoggedIn = !auth.isEmpty; // user is logged in
//   return checkIfUserLoggedIn ? (
//     <Profile {...props} />
//   ) : !isProtectedRoute ? (
//     Component
//   ) : (
//     <Redirect to="/" />
//   );
// };
