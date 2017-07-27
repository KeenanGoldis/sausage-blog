import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers.js";
import UserDetail from "./components/UserDetail.js";
import users from "./users.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      name: "Keenan"
    };
  }

  render() {
    let visible = false;
    let theDiv = "";
    theDiv = <div> should i be here</div>;
    if (this.state.visible) {
      theDiv = <div>im true, therefor I am visible</div>;
    }

    return (
      <div>
        {theDiv}
        <ListOfUsers users={users} />
        <UserDetail users={users} />
    
      </div>
    );
  }
}

export default App;
