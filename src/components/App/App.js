import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";

import "./App.scss";

const App = props => (
  <div className="App">
    <div className="App__top">
      <Header />
    </div>
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.any
};

export default App;
