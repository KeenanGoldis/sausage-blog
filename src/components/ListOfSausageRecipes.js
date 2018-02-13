import React, {Component} from "react";
import SausageRecipeDetail from "./SausageRecipeDetail.js";
import SausageRecipeImage from "./SausageRecipeImage.js";
import "../css/ListOfSausageRecipes.css";
import Flexbox from 'flexbox-react';

class ListOfSausageRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailVisible: true,
      listVisible: true,
      searchText: "",
      sausageRecipes: props.sausageRecipes,
      currentSausageRecipe: props.currentSausageRecipe,
    };
  }

  toggleShow = () => {
  if (this.state.detailVisible === true) {
    this.setState({detailVisible: false});
  } else {
    this.setState({detailVisible: true});
  }
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
        <Flexbox className="sausageRecipeList" >
          <div hidden={!this.state.listVisible}>
            {this.state.sausageRecipes.map((sausageRecipe, i) =>
              <div key={i}>
                <p key={i}>
                  <button id="sausageButton" className="sausage_name" onClick={() => {this.props.selectSausageRecipe(sausageRecipe.id-1)}}>{sausageRecipe.sausage_name}</button>
                </p>
              </div>
            )}
          </div>
          <div className="sausageRecipeImage" hidden={!this.state.detailVisible}>
            <SausageRecipeImage current={current} />
          </div>
          <div className="sausageRecipeDetail" hidden={!this.state.detailVisible}>
            <SausageRecipeDetail current={current} />
          </div>
        </Flexbox>
      </div>
    );
  }
}

export default ListOfSausageRecipes;
