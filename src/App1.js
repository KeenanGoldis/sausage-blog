import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import users from './users';
class ListOfUsers extends React.Component{
  render(){
    var userDivs = map(function(user){
      return <div>
          {user.first_name} - {user.last_name}
          <a> View </a>
      </div>
    });
    return (<div>
             {userDivs}
           </div>)
  }
} 
class UserDetail extends React.Component{
  render(){
    var user = users[0];
    return <div>{user.first_name}</div>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListOfUsers  />
        <UserDetail />
     
      </div>
    );
  }
}


export default App;
