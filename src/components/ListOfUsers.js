import React, {Component} from "react";
import UserDetail from "./UserDetail";
import "../css/ListOfSausageRecipes.css";


class ListOfsausageRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: true,
      searchText: "",
      sausageRecipes: props.sausageRecipes,
      currentSausageRecipe: props.currentSausageRecipe,
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
    const current = this.state.sausageRecipes[this.props.currentSausageRecipe];

    return (
      <div>
      <button id="button" onClick={this.toggleList}>Sausage Recipes</button>
        <div hidden={!this.state.listVisible}>
          {this.state.sausageRecipes.map((user, i) =>
            <div>
              <p key={i}>
                <div className="sausage_name">
                  <h3>{user.sausage_name}</h3>
                </div>
                <div className="sausage_description">
                  <h6>{user.sausage_description}</h6>
                </div>

                <button id="view" onClick={() => {this.props.selectSausageRecipe(user.id-1)}}>View Detail</button>
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

export default ListOfsausageRecipes;
