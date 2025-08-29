import React from 'react';

export function UserCard({ name, age, email, hobby }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Вік: {age}</p>
            <p>Email: {email}</p>
            <p>Хобі: {hobby}</p>
        </div>
    )
}