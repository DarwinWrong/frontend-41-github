import React, { useState, useCallback, useRef } from "react";
import UserItem from "./UserItem";

const UserList = ({ users }) => {
  const [likes, setLikes] = useState(0);

  const inputRef = useRef(null);
  const clickCount = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  const handleUserClick = useCallback((id) => {
    console.log("Клік по користувачу з id:", id);
  }, []);

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
    clickCount.current += 1;
    console.log("Кнопку очистити натискали:", clickCount.current);
  };

  return (
    <div>
      <h2>Список користувачів</h2>
      <ul>
        {users.map((user) => (
          <UserItem key={user.id} user={user} onClick={handleUserClick} />
        ))}
      </ul>

      <button onClick={() => setLikes(likes + 1)}>
        Лайки: {likes}
      </button>

      <hr />

      <h2>Форма з useRef</h2>
      <input type="text" placeholder="Введіть ім’я" ref={inputRef} />
      <br />
      <button onClick={handleClear}>Очистити</button>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Примусовий ререндер
      </button>
      <p>Кількість ререндерів: {renderCount}</p>
    </div>
  );
};

export default UserList;