import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
