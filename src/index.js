import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users";


function render() {
  ReactDOM.render(
    <App />,
    document.getElementById("root")
  );
}
render();
