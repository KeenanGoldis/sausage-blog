import React from "react";

function UserDetail(props){
  const userDivs = props.users.map(user=>{
    return <div>{user.first_name} {user.last_name} is the coolest guy</div>
  })
  return <div>{userDivs[0]}</div>;
}

export default UserDetail;
