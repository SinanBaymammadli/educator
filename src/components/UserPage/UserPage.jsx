import React from "react";
import PropTypes from "prop-types";
import style from "./UserPage.module.css";

const UserPage = props => (
  <div className={style.UserPage}>{props.children}</div>
);

UserPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

export default UserPage;
