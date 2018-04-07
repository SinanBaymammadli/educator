import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";

import style from "./Root.module.css";
import Router from "../Router/Router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = ({ isLoggedIn, userDisplayName }) => (
  <BrowserRouter>
    <div className={style.Root}>
      <Header isLoggedIn={isLoggedIn} userDisplayName={userDisplayName} />
      <main className={style.Main}>
        <Router isLoggedIn={isLoggedIn} />
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

Root.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  userDisplayName: PropTypes.string
};

Root.defaultProps = {
  userDisplayName: ""
};

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, null)(Root);
