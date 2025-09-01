import React from "react";

function MoodCard ({mood, comment}) {
    const modStyle = {
    "😊": { backgroundColor: "lightgreen", padding: "10px", borderRadius: "8px" },
    "😐": { backgroundColor: "lightgray", padding: "10px", borderRadius: "8px" },
    "😞": { backgroundColor: "lightcoral", padding: "10px", borderRadius: "8px" },
    default: { backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "8px" }
  };
  const style = modStyle[mood] || modStyle.default;

  return (
     <div style={{ ...style, marginTop: "15px" }}>
      {mood ? (
        <p>
          Ваш настрій сьогодні: <b>{mood}</b> <br />
          Коментар: <i>{comment || "Без коментаря"}</i>
        </p>
      ) : (
        <p>Настрій не вказано</p>
      )}
    </div>
  );
}

export default MoodCard;