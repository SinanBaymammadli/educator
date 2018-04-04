import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { logout } from "../../actions/auth";

import style from "./Header.module.css";
import HeaderLink from "../HeaderLink/HeaderLink";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ isLoggedIn, username, logUserOut }) => (
  <header className={style.Header}>
    <nav className={style.Nav}>
      <HeaderLink to="/" text="EDUCATOR" logo />
      <SearchBar />
      <HeaderLink to="/dashboard" text="+ Add your course" />
      {!isLoggedIn && <HeaderLink to="/login" text="Log in" />}
      {!isLoggedIn && <HeaderLink to="/signup" text="Sign up" />}
      {isLoggedIn && (
        <UncontrolledDropdown>
          <DropdownToggle caret>{username}</DropdownToggle>
          <DropdownMenu>
            <a href="/">Another Action</a>
            <DropdownItem divider />
            <DropdownItem onClick={logUserOut}>Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      )}
    </nav>
  </header>
);

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
  logUserOut: PropTypes.func.isRequired
};

Header.defaultProps = {
  username: ""
};

export default connect(null, { logUserOut: logout })(Header);
