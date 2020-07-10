import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import history from "../history";

//components
import Login from "pages/login/container";
import Signup from "pages/signup/container";
import Profile from "pages/profile";

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/profile" exact component={Profile} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default routes;
