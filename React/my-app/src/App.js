import React from 'react';
import MoodCard from './homeWork/July_16_2025/MoodCard';

function App() {
  const [mood, setMood] = React.useState("😊");
  const [comment, setComment] = React.useState("");
  return (
    <div style={{textAlign:"center", marginTop:"20px"}}>
        <h2>📌 Mood Tracker</h2>
        <div>
          <button onClick={() => setMood("😊")}>😊</button>
          <button onClick={() => setMood("😐")}>😐</button>
          <button onClick={() => setMood("😞")}>😞</button>
        </div>
        <input
          type="text"
          placeholder="Що вплинуло на твій настрій"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{marginTop:"10px", width:"250px", padding:"5px"}}/>
          <MoodCard mood={mood} comment={comment}/>
      </div>
  )
}

export default App;
