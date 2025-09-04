import React, { useState, useEffect, useRef } from "react";
import "../App.css";

export default function UserSurveyForm() {
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("Чоловік");
  const [used, setUsed] = useState(false);

  const [count, setCount] = useState(0);
  const [final, setFinal] = useState("");

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setCount((count) => count + 1);
  }, [age, gender, used]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinal(
      `Вам ${age} років, ви обрали стать: ${gender}, і вже користувались React${
        used ? "Так" : "Ні"
      }`
    );
  };

  return (
    <div className="allContant">
      <h2>Опитування</h2>
      <form action="" onSubmit={handleSubmit} className="formContant">
        <div className="formInner">
          <label htmlFor="">Вік:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="">Стать:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Чоловік">Чоловік</option>
            <option value="Жінка">Жінка</option>
            <option value="Інше">Інше</option>
          </select>
        </div>
        <div className="check_box">
          <input
            type="checkbox"
            checked={used}
            onChange={(e) => setUsed(e.target.checked)}
          />
          <span>Ви вже користувались React</span>
        </div>
        <button type="submit">Надіслати</button>
      </form>
      <p className="changes">Змін у формі: {count}</p>
      {count > 10 && <p className="joke">Та ти не можеш визначитись 😊</p>}
      {final && <p className="finalText">{final}</p>}
    </div>
  );
}
