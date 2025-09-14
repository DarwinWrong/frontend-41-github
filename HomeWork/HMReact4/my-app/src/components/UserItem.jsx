import React, { memo } from "react";

const UserItem = ({ user, clickFunc }) => {
  console.log("User render", user.name);
  return (
    <li onClick={() => clickFunc(user.id)} style={{ cursor: "pointer" }}>
      {user.name}
    </li>
  );
};

export default memo(UserItem);
