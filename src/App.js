import React from "react";
import ListOfUsers from "./components/ListOfUsers";

function App(props) {
  return (
    <div className="App">
      <ListOfUsers
        sausageRecipes={props.sausageRecipes}
        currentSausageRecipe={props.currentSausageRecipe}
        selectSausageRecipe={props.selectSausageRecipe} />
    </div>
  );
}

export default App;
