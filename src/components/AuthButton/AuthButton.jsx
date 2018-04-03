import React from "react";
import PropTypes from "prop-types";
import style from "./AuthButton.module.css";

const AuthButton = ({ disabled, loading, text }) => (
  <button
    disabled={disabled}
    className={`${style.AuthButton} ${disabled && style.Disabled}`}
  >
    {text}
  </button>
);

AuthButton.propTypes = {
  disabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default AuthButton;
