import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import sausageRecipes from "./sausageRecipes.js";
import selectSausageRecipe from "./functions/selectSausageRecipe.js";

let currentSausageRecipe = 0;


function render() {
  ReactDOM.render(
    <App
      sausageRecipes={sausageRecipes}
      currentSausageRecipe={currentSausageRecipe}
      selectSausageRecipe={selectSausageRecipe}
    />,
    document.getElementById("root")
  );
}
render();
