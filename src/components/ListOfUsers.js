import React, {Component} from "react";
import UserDetail from "./UserDetail";

class ListOfUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: true,
      searchText: "",
      users: props.users,
      currentUser: props.currentUser,
    };
  }

  toggleList = () => {
    if (this.state.listVisible === true){
      this.setState({listVisible: false});
    } else {
      this.setState({listVisible: true});
    }
  }

  render() {
    const current = this.state.users[this.props.currentUser];
    return (
      <div>
      <button id="button" onClick={this.toggleList}>Sauasge Recipes</button>
        <div hidden={!this.state.listVisible}>
          {this.state.users.map((user, i) =>
            <div>
              <p key={i}>
                {user.sausage_name} {user.last_name}
                <button id="view" onClick={() => {this.props.selectUser(user.id-1)}}>View Detail</button>
              </p>
            </div>
          )}
        </div>
        <div className="detail">
          <UserDetail current={current} />
        </div>
      </div>
    );
  }
}

export default ListOfUsers;
