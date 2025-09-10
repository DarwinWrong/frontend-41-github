import React, { useState, useCallback } from "react";

const UserItem = React.memo(function UserItem({ user, onClick }) {
    return (
        <li onClick={() => onClick(user.id)}>{user.name}({user.email})</li>
    )
})

function UserList() {
    const [likes, setLikes] = useState(0)
    const users = [
        { id: 1, name: "Mary", email: "mary@example.com" },
        { id: 2, name: "John", email: "john@example.com" },
        { id: 3, name: "Tom", email: "tom@example.com" },
      ]
    const handleUserClick = useCallback((id) => {
        console.log("Клік по користувачу з id:", id)
    },[])
    return (
        <div>
            <h2>Список користувачів</h2>
            <ul>{users.map((user) => (
                <UserItem key={user.id} user= {user} onClick={handleUserClick}></UserItem>
            ))}</ul>
            <p>Лайків: {likes}</p>
            <button onClick={() => setLikes((prev) => prev+1)}>Додати лайк</button>
        </div>
    )
}

export default UserList