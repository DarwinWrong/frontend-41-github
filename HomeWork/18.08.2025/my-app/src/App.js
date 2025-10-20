import React from "react";
import { useLocalStorage } from "./components/useLocalStorage.js";

function App() {
  const [name, setName] = useLocalStorage("userName", "");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Введи своє ім’я </h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введіть ім’я"
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <p>
        Ваше ім’я: <b>{name}</b>
      </p>
    </div>
  );
}

export default App;
