import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "../Router/Router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => (
  <BrowserRouter>
    <div className="Root">
      <Header />
      <Router isLoggedIn={false} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default Root;
