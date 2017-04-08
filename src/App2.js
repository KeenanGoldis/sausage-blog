import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import users from './users';
class ListOfUsers extends React.Component{
  constructor(){
    super();
    this.state = {users,currentUser:null}
  }
  render(){
    //i have access to this function on props
    //where do i call it
    //this.notifyOfUserChanged();

   
    var userDivs = this.state.users.map(function(user){
      return <div>
        <a onClick={// curly brace to start javascript part of jsx
                   //normal function
                   function(selectedUser){
                     //call the function that was provided by the parent
                     this.props.notifyOfUserChanged(selectedUser)
                   }//end of function
                   .bind(this,user) //bind the function to a user
                  //end of curly brace to end javascript in jsx
                  }
        >
          {user.first_name}
        </a>
      </div>
    }.bind(this));
    return (<div>
            <button onClick={()=>{
              console.log(this.props.users.length);
              this.state.users.pop();
              this.setState({user:this.state.users})
              console.log(this.props.users.length);
              }} 
              type="button" 
              value="delete user">Delete user</button>
             {userDivs}
           </div>)
  }
} 
class UserDetail extends React.Component{
  render(){
    return <div>{this.props.user.first_name}</div>
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      thetext:'',
      currentUser:{}
    }
  }
  handleTextChange(event){
    console.log(event.target.value);
    this.setState({
      thetext:event.target.value
    })
  }
  handleUserChanged(user){
    this.setState({
      currentUser:user
    });
  }
  render() {
    return (
      <div className="App">
        current user: <UserDetail user={this.state.currentUser} />
        type something here 
        <input 
        onChange={(e)=>this.handleTextChange(e)}
        value={this.state.thetext}
        />
        <ListOfUsers notifyOfUserChanged={this.handleUserChanged.bind(this)} users={users}/>
        <UserDetail user = {this.state.currentUser}/>
     
      </div>
    );
  }
}


export default App;
