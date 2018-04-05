import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { login } from "../../actions/auth";
import style from "./Login.module.css";
import "./auth.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = ({ signin }) => (
  <div className={style.AuthPage}>
    <div className="authPageHeader">
      <NavLink to="/login" className="authPageTab">
        <h2>Log in</h2>
      </NavLink>

      <NavLink to="/signup" className="authPageTab">
        <h2>Sign up</h2>
      </NavLink>
    </div>

    <LoginForm onSubmit={signin} />
  </div>
);

Login.propTypes = {
  signin: PropTypes.func.isRequired
};

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { signin: login })(Login);
