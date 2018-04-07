import React from "react";
import PropTypes from "prop-types";
import style from "./Container.module.css";

const Container = props => (
  <div className={style.Container}>{props.children}</div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

export default Container;
