import React from "react";
import ListOfSausageRecipes from "./components/ListOfSausageRecipes";

function App(props) {
  return (
    <div className="App">
      <ListOfSausageRecipes
        sausageRecipes={props.sausageRecipes}
        currentSausageRecipe={props.currentSausageRecipe}
        selectSausageRecipe={props.selectSausageRecipe} />
    </div>
  );
}

export default App;
