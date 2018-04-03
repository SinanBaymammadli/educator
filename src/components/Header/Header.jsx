import React from "react";
import { withRouter } from "react-router-dom";
import style from "./Header.module.css";
import HeaderLink from "../HeaderLink/HeaderLink";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => (
  <header className={style.Header}>
    <nav className={style.Nav}>
      <HeaderLink to="/" text="EDUCATOR" logo />
      <SearchBar />
      <HeaderLink to="/dashboard" text="+ Add your course" />
      <HeaderLink to="/login" text="Log in" />
      <HeaderLink to="/signup" text="Sign up" />
    </nav>
  </header>
);

export default withRouter(Header);
