import React from "react";

const UserItem = ({ user, onClick }) => {
  console.log("Рендериться:", user.name);

  return (
    <li onClick={() => onClick(user.id)}>
      {user.name}
    </li>
  );
};

export default React.memo(UserItem);