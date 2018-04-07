import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { register } from "../../actions/auth";
import SignupForm from "../../components/SignupForm/SignupForm";
import style from "./Signup.module.css";
import "../Login/auth.css";

const Signup = ({ signup }) => (
  <div className={style.AuthPage}>
    <div className="authPageHeader">
      <NavLink to="/login" className="authPageTab">
        <h2>Log in</h2>
      </NavLink>

      <NavLink to="/signup" className="authPageTab">
        <h2>Sign up</h2>
      </NavLink>
    </div>
    <SignupForm onSubmit={signup} />
  </div>
);

Signup.propTypes = {
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup: register })(Signup);
