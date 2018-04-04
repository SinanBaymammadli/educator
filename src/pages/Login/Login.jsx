import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { login } from "../../actions/auth";
import style from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = ({ signin }) => (
  <div className={style.AuthPage}>
    <h2>Log in</h2>
    <LoginForm onSubmit={signin} />
  </div>
);

Login.propTypes = {
  signin: PropTypes.func.isRequired
};

export default connect(null, { signin: login })(Login);
