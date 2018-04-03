import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import style from "./HeaderLink.module.css";

const HeaderLink = ({ to, text, logo }) => (
  <NavLink to={to} className={`${style.Link} ${logo ? style.Logo : ""}`}>
    <span className={style.Text}>{text}</span>
  </NavLink>
);

HeaderLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  logo: PropTypes.bool
};

HeaderLink.defaultProps = {
  logo: false
};

export default HeaderLink;
