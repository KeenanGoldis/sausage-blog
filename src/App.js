import React from "react";
import ListOfUsers from "./components/ListOfUsers";

function App(props) {
  return (
    <div className="App">
      <ListOfUsers
        users={props.users}
        currentUser={props.currentUser}
        selectUser={props.selectUser} />
    </div>
  );
}

export default App;
