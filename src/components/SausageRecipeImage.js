import React from "react";
import Flexbox from 'flexbox-react';

function SausageRecipeImage(props){
  let sausageRecipe = props.current;
  return(
      <div>
        <img className="sausageRecipeImage" src={sausageRecipe.avatar} alt={sausageRecipe.sausage_name} />
      </div>
  );
}
export default SausageRecipeImage;
