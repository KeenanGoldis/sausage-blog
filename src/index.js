import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import users from "./users.js";

let currentUser = 0;

function selectUser(user){
  currentUser = user;
  render();
}

function render() {
  ReactDOM.render(
    <App
      users={users}
      currentUser={currentUser}
      selectUser={selectUser}
    />,
    document.getElementById("root")
  );
}
render();
