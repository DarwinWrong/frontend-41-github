import React from "react";

export function MoodCard({ mood = "", comment = "Настрій не вказано" }) {
  let moodStyle = {};

  switch (mood) {
    case "😊":
      moodStyle = { backgroundColor: "green", border: "2px solid black" };
      break;
    case "😐":
      moodStyle = { backgroundColor: "grey", border: "2px solid black" };
      break;
    case "😔":
      moodStyle = { backgroundColor: "red", border: "2px solid black" };
      break;
  }

  return (
    <div style={{ ...moodStyle }}>
      <h2>Ваш настрій: {mood}</h2>
      {comment && <p>Комент: {comment}</p>}
    </div>
  );
}
