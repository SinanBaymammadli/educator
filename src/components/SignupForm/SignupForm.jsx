import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import {
  required,
  maxLength,
  minLength,
  email,
  match
} from "../../helpers/formValidations";
import FormField from "../FormField/FormField";
import AuthButton from "../AuthButton/AuthButton";

const Form = ({ handleSubmit, submitting, invalid, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Field
      name="name"
      label="Name"
      component={FormField}
      validate={[required, maxLength(20), minLength(3)]}
    />
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
    <Field
      type="password"
      name="confirmPassword"
      label="Confirm Password"
      component={FormField}
      validate={[required, minLength(6), match("password")]}
    />
    <AuthButton
      disabled={invalid || submitting}
      loading={submitting}
      text="Sign up"
    />
  </form>
);

const SignupForm = reduxForm({
  form: "signup",
  destroyOnUnmount: false
})(Form);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired
};

export default SignupForm;
