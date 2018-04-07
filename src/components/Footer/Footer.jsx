import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => (
  <footer className={style.Wrapper}>
    <div className={style.Container}>
      <div className={`&{style.Grid} grid grid-1 grid-sm-2 grid-md-4`}>
        <ul className={style.List}>
          <li className={style.ListItem}>
            <h3>Get started</h3>
          </li>
          <li className={style.ListItem}>
            <Link to="/search">Find a course</Link>
          </li>
          <li className={style.ListItem}>
            <Link to="/subscription">Add your course</Link>
          </li>
        </ul>
        <ul className={style.List}>
          <li className={style.ListItem}>
            <h3>Learn more</h3>
          </li>
          <li className={style.ListItem}>
            <Link to="/why">Why Educator?</Link>
          </li>
          <li className={style.ListItem}>
            <Link to="/how-it-works">How it works</Link>
          </li>
          <li className={style.ListItem}>
            <Link to="/subscription">Pricing</Link>
          </li>
          <li className={style.ListItem}>
            <Link to="/about">About</Link>
          </li>
          <li className={style.ListItem}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className={style.List}>
          <li className={style.ListItem}>
            <h3>Top courses</h3>
          </li>
          <li className={style.ListItem}>hello</li>
          <li className={style.ListItem}>hello</li>
        </ul>
        <ul className={style.List}>
          <li className={style.ListItem}>
            <h3>Social</h3>
          </li>
          <li className={style.ListItem}>hello</li>
          <li className={style.ListItem}>hello</li>
        </ul>
      </div>
      <div className={style.Bottom}>
        <p>© Educator 2018</p>
      </div>
    </div>
  </footer>
);

export default Footer;
