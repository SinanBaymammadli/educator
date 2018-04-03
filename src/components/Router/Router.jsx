import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";
import Dashboard from "../../pages/Dashboard/Dashboard";

const UserRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      )
    }
  />
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

const GuestRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/dashboard" }} />
      )
    }
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

const Router = ({ isLoggedIn }) => (
  <Switch>
    <Route path="/" exact component={Home} />
    <GuestRoute isLoggedIn={isLoggedIn} path="/login" component={Login} />
    <GuestRoute isLoggedIn={isLoggedIn} path="/signup" component={Signup} />
    <UserRoute
      isLoggedIn={isLoggedIn}
      path="/dashboard"
      component={Dashboard}
    />
  </Switch>
);

Router.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Router;
