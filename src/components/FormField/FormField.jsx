import React from "react";
import PropTypes from "prop-types";
import style from "./FormField.module.css";

const FormField = ({ label, input, meta, ...rest }) => {
  const invalid = meta.error && meta.touched;

  return (
    <div className={style.FormField}>
      <label htmlFor={input.name} className={style.label}>
        {label}
      </label>
      <input
        className={`${style.input} ${invalid &&
          style.InvalidInput} ${meta.valid && style.ValidInput}`}
        name={input.name}
        id={input.name}
        placeholder={label}
        {...rest}
        {...input}
      />
      {invalid && <div className={style.ErrorText}>{meta.error}</div>}
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
    touched: PropTypes.bool.isRequired
  }).isRequired
};

export default FormField;
