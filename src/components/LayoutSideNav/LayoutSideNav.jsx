import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import style from "./LayoutSideNav.module.css";

const LayoutSideNav = props => (
  <aside className={style.LayoutSideNav}>{props.children}</aside>
);

const LayoutSideNavItem = ({ to, text }) => (
  <NavLink to={to} className={style.LayoutSideNavItem}>
    {text}
  </NavLink>
);

LayoutSideNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

LayoutSideNavItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export { LayoutSideNav, LayoutSideNavItem };
