import React from "react";
import PropTypes from "prop-types";
import UserPage from "../../components/UserPage/UserPage";
import {
  LayoutSideNav,
  LayoutSideNavItem
} from "../../components/LayoutSideNav/LayoutSideNav";
import style from "./Account.module.css";

const Account = props => (
  <UserPage>
    <LayoutSideNav>
      <LayoutSideNavItem to="/account/email" text="Email" />
      <LayoutSideNavItem to="/account/password" text="Password" />
    </LayoutSideNav>
    <div className={style.AccountContent}>{props.children}</div>
  </UserPage>
);

Account.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired
};

export default Account;
