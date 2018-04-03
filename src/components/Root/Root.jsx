import React from "react";
import { BrowserRouter } from "react-router-dom";

import style from "./Root.module.css";
import Router from "../Router/Router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => (
  <BrowserRouter>
    <div className={style.Root}>
      <Header />
      <main className={style.Main}>
        <Router isLoggedIn={false} />
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default Root;
