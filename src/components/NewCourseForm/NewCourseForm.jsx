import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import {
  required,
  maxLength,
  minLength,
  number
} from "../../helpers/formValidations";
import FormField from "../FormField/FormField";
import AuthButton from "../AuthButton/AuthButton";

const Form = ({ handleSubmit, submitting, invalid, onSubmit }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Field
      name="title"
      label="Title"
      component={FormField}
      validate={[required, maxLength(20), minLength(3)]}
    />
    <Field
      name="description"
      label="Description"
      component={FormField}
      validate={[required, maxLength(20), minLength(3)]}
    />
    <Field
      name="price"
      label="Price"
      component={FormField}
      validate={[required, maxLength(6), number]}
    />
    <AuthButton
      disabled={invalid || submitting}
      loading={submitting}
      text="Create"
    />
  </form>
);

const NewCourseForm = reduxForm({
  form: "newCourse",
  destroyOnUnmount: false
})(Form);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired
};

export default NewCourseForm;
