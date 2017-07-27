import React from "react";


class ListOfUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      visible: true,
      btn: "hide",
      searchText: ""
    };
  }
  hide() {
    if (this.state.btn === "hide") {
      this.setState({
        btn: "show",
        hide: true
      });
    } else {
      this.setState({
        btn: "hide",
        hide: false
      });
    }
  }

  render() {
    let userDivs;
    if (!this.state.hide) {
      userDivs = this.props.users.map(
        (user, index) => {
          return (<div key={index}>{user.first_name} {user.last_name}</div>)
        });
    }
    // const userDivs =
    return (
      <div>
        {userDivs}
        <div>
          <button onClick={() => this.hide()}>
            {this.state.btn}
          </button>
          <div>Search</div>
          <input
          type="text"
          value={this.state.searchText}
          onChange={(e) => this.setState({
            searchText: e.target.value
          })
        }
          ></input>
        </div>
      </div>
    );
  }

}
export default ListOfUsers;
