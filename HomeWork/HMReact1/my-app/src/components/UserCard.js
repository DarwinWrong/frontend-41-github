import React from "react";
import "../App.css";

export function UserCard({ name, age, email, hobby }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Вік: {age}</p>
      <p>Email: {email}</p>
      <p>Хобі: {hobby}</p>
    </div>
  );
}
