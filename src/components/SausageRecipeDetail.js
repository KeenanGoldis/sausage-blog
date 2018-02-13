import React from "react";

function SausageRecipeDetail(props){
  let sausageRecipe = props.current;
  return(
    <div>
      <img src={sausageRecipe.avatar} alt={sausageRecipe.sausage_name} />
      <p>{sausageRecipe.sausage_description}</p>
    </div>
  );
}
export default SausageRecipeDetail;
