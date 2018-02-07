import React from "react";

function UserDetail(props){
  let user = props.current;
  return(
    <div>
      <h2>Testing</h2>
      <img src={user.avatar} alt={user.first_name} />
      <p>{user.address}</p>
    </div>
  );
}
export default UserDetail;
