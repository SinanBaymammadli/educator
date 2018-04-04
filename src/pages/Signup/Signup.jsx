import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { register } from "../../actions/auth";
import SignupForm from "../../components/SignupForm/SignupForm";
import style from "./Signup.module.css";

const Signup = ({ signup }) => (
  <div className={style.AuthPage}>
    <h2>Sign </h2>
    <SignupForm onSubmit={signup} />
  </div>
);

Signup.propTypes = {
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup: register })(Signup);
