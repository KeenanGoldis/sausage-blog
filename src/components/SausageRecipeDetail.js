import React from "react";
import Flexbox from 'flexbox-react';

function SausageRecipeDetail(props){
  let sausageRecipe = props.current;
  return(
      <div>
        <h2 className="sausageRecipeDetail">{sausageRecipe.sausage_name}</h2>
        <h4 className="sausageRecipeDetail">{sausageRecipe.sausage_description}</h4>
        <ul>
          <li>{sausageRecipe.ingredient_protein}</li>
          <li>{sausageRecipe.ingredient_1}</li>
          <li>{sausageRecipe.ingredient_2}</li>
          <li>{sausageRecipe.ingredient_3}</li>
          <li>{sausageRecipe.ingredient_4}</li>
          <li>{sausageRecipe.ingredient_5}</li>
          <li>{sausageRecipe.ingredient_6}</li>
        </ul>
      </div>
  );
}
export default SausageRecipeDetail;
