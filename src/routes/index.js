import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import history from "../history";
import { connect } from "react-redux";

//components
import Login from "pages/login/container";
import Signup from "pages/signup/container";
import Profile from "pages/profile/container";

// check auth session and redirect if not authenticated
const checkAuthSession = (
  Component,
  props,
  auth,
  defaultRouteName = "private"
) => {
  let checkIfUserLoggedIn = !auth.isEmpty; // user is logged in
  console.log({ checkIfUserLoggedIn });
  return checkIfUserLoggedIn ? (
    <Profile {...props} />
  ) : defaultRouteName !== "private" ? (
    Component
  ) : (
    <Redirect to="/" />
  );
};

const allProtectedRoutes = auth => [
  <>
    <Route
      path="/profile"
      exact
      render={props => checkAuthSession(<Profile {...props} />, props, auth)}
    />
  </>
];

const routes = props => {
  let auth = props.auth;
  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={props =>
            checkAuthSession(<Login {...props} />, props, auth, "login")
          }
        />
        <Route
          path="/signup"
          exact
          render={props =>
            checkAuthSession(<Signup {...props} />, props, auth, "signup")
          }
        />
        <Redirect to="/" />
        {allProtectedRoutes(auth)}
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
