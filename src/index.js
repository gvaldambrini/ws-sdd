import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunkMiddleware from "redux-thunk";

import { BrowserRouter as Router } from "react-router-dom";

import rootReducer from "./modules";
import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const routes = (
  <Router>
    <App>Empty App</App>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById("root")
);
