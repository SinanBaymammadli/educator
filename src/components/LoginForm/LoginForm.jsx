import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import { required, minLength, email } from "../../helpers/formValidations";
import FormField from "../FormField/FormField";
import AuthButton from "../AuthButton/AuthButton";

const Form = ({ handleSubmit, submitting, invalid, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
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

const SignupForm = reduxForm({
  form: "login",
  destroyOnUnmount: false
})(Form);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired
};

export default SignupForm;
