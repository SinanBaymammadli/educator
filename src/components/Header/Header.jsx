import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import UncontrolledDropdown from "reactstrap/lib/UncontrolledDropdown";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownItem from "reactstrap/lib/DropdownItem";
import { logout } from "../../actions/auth";

import style from "./Header.module.css";
import HeaderLink from "../HeaderLink/HeaderLink";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ isLoggedIn, userDisplayName }) => (
  <header className={style.Header}>
    <nav className={style.Nav}>
      <HeaderLink to="/" text="EDUCATOR" logo />
      <SearchBar />
      <HeaderLink to="/course/new" text="+ Add your course" />
      {!isLoggedIn && <HeaderLink to="/login" text="Log in" />}
      {!isLoggedIn && <HeaderLink to="/signup" text="Sign up" />}
      {isLoggedIn && (
        <UncontrolledDropdown>
          <DropdownToggle className={style.UserAvatar} caret>
            {userDisplayName.charAt(0)}
          </DropdownToggle>
          <DropdownMenu className="">
            <div className={style.UserMenuContent}>
              <DropdownItem tag="span">
                <NavLink className={style.UserMenuItem} to="/my-courses">
                  My courses
                </NavLink>
              </DropdownItem>
              <DropdownItem tag="span">
                <NavLink className={style.UserMenuItem} to="/profile-settings">
                  Profile
                </NavLink>
              </DropdownItem>
              <DropdownItem tag="span">
                <NavLink className={style.UserMenuItem} to="/account/email">
                  Account
                </NavLink>
              </DropdownItem>

              <DropdownItem
                className={`${style.UserMenuItem} ${style.LogoutButton}`}
                onClick={logout}
              >
                Logout
              </DropdownItem>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      )}
    </nav>

    <nav className={style.NavMobile}>
      <button>H</button>
      <NavLink to="/">
        <h1>E</h1>
      </NavLink>
      <button>S</button>
    </nav>
  </header>
);

Header.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userDisplayName: PropTypes.string
};

Header.defaultProps = {
  userDisplayName: ""
};

export default Header;
