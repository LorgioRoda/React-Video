import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //add redux
import { createStpre } from "redux";
import App from "./routes/App";
import "./assets/styles/App.scss";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")
);
