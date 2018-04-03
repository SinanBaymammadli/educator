/* eslint-disable  react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/Root/Root";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/index.css";

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
