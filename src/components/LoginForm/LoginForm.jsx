import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { required, minLength, email } from "../../helpers/formValidations";
import FormField from "../FormField/FormField";
import AuthButton from "../AuthButton/AuthButton";
import style from "./LoginForm.module.css";

const LoginForm = ({ handleSubmit, submitting, invalid, onSubmit, error }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    {error && (
      <div className={style.authError}>This credentials are invalid.</div>
    )}
    <Field
      type="email"
      name="email"
      label="Email"
      component={FormField}
      validate={[required, email]}
    />
    <Field
      type="password"
      name="password"
      label="Password"
      component={FormField}
      validate={[required, minLength(6)]}
    />
    <AuthButton
      disabled={invalid || submitting}
      loading={submitting}
      text="Log in"
    />
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

const mapStateToProps = state => state.auth;

export default reduxForm({
  form: "login",
  destroyOnUnmount: false
})(connect(mapStateToProps)(LoginForm));
