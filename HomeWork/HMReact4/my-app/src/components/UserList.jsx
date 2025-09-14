import React, { useCallback, useState } from "react";
import UserItem from "./UserItem";

const UserList = () => {
  const [like, setLike] = useState(0);

  const users = [
    { id: 1, name: "Vasia" },
    { id: 2, name: "Kolia" },
    { id: 3, name: "Maks" },
    { id: 4, name: "Nika" },
  ];

  const handleUserClick = useCallback((id) => {
    console.log("Клік по киристувачі з id: ", id);
  }, []);

  return (
    <div>
      <h2>Список користувачів</h2>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} clickFunc={handleUserClick} />
        ))}
      </ul>

      <p>Лайки: {like}</p>
      <button onClick={() => setLike((prev) => prev + 1)}>Лайк</button>
    </div>
  );
};

export default UserList;
