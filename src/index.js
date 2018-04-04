/* eslint-disable  react/jsx-filename-extension, no-underscore-dangle */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Root from "./components/Root/Root";
import registerServiceWorker from "./registerServiceWorker";

import rootReducer from "./reducers/rootReducer";
import { logUserIn } from "./actions/auth";
import "./styles/index.css";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

if (localStorage.userToken && localStorage.name) {
  const name = localStorage.getItem("name");
  store.dispatch(logUserIn({ user_display_name: name }));
}

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
