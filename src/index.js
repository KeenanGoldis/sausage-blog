import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import sausageRecipes from "./sausageRecipes.js";

let currentSausageRecipe = 0;

function selectSausageRecipe(sausageRecipe){
  currentSausageRecipe = sausageRecipe;
  render();
}

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
