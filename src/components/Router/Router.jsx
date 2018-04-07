import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";

function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      /* eslint-disable */
      this.setState({
        component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}

const Home = asyncComponent(() => import("../../pages/Home/Home"));
const Login = asyncComponent(() => import("../../pages/Login/Login"));
const Signup = asyncComponent(() => import("../../pages/Signup/Signup"));
const NewCourse = asyncComponent(() => import("../../pages/Course/NewCourse"));
const Email = asyncComponent(() => import("../../pages/Account/Email"));
const Password = asyncComponent(() => import("../../pages/Account/Password"));
const ProfileSettings = asyncComponent(() =>
  import("../../pages/ProfileSettings/ProfileSettings")
);
const MyCourses = asyncComponent(() =>
  import("../../pages/MyCourses/MyCourses")
);
const Search = asyncComponent(() => import("../../pages/Search/Search"));
const CourseDetailPage = asyncComponent(() =>
  import("../../pages/CourseDetailPage/CourseDetailPage")
);

let redirectUrlAfterLogin;

const UserRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      redirectUrlAfterLogin = props.location.pathname;
      return isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login" }} />
      );
    }}
  />
);

UserRoute.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

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
        <Redirect to={{ pathname: redirectUrlAfterLogin || "/" }} />
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
    <Route path="/search" component={Search} />
    <Route path="/c/:id" component={CourseDetailPage} />
    <GuestRoute isLoggedIn={isLoggedIn} path="/login" component={Login} />
    <GuestRoute isLoggedIn={isLoggedIn} path="/signup" component={Signup} />
    <UserRoute
      isLoggedIn={isLoggedIn}
      path="/course/new"
      component={NewCourse}
    />
    <UserRoute
      isLoggedIn={isLoggedIn}
      path="/account/email"
      component={Email}
    />
    <UserRoute
      isLoggedIn={isLoggedIn}
      path="/account/password"
      component={Password}
    />

    <UserRoute
      isLoggedIn={isLoggedIn}
      path="/profile-settings"
      component={ProfileSettings}
    />

    <UserRoute
      isLoggedIn={isLoggedIn}
      path="/my-courses"
      component={MyCourses}
    />
  </Switch>
);

Router.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Router;
