import React, { useState } from "react";
import { MoodCard } from "./MoodCard";

export function MoodForm() {
  const [mood, setMood] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Який у Вас сьогодні настрій?</h1>
      <div style={{ margin: "20px 10px" }}>
        <button onClick={() => setMood("😊")}>😊 Гарний</button>
        <button onClick={() => setMood("😐")}>😐 Нейтральний</button>
        <button onClick={() => setMood("😔")}>😔 Поганий</button>
      </div>
      <input
        type="text"
        placeholder="Що вплинуло на Ваш настрій?"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <MoodCard mood={mood || undefined} comment={comment} />
    </div>
  );
}
