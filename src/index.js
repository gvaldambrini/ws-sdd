import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunkMiddleware from "redux-thunk";

import { Route, BrowserRouter as Router } from "react-router-dom";

import rootReducer from "./modules";
import App from "./components/App";
import Home from "./containers/Home";
import News from "./containers/News";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/news/:id" component={News} />
    </App>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById("root")
);
