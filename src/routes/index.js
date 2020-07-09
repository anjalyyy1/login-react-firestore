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

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default routes;
