import React from 'react';
// import MoodCard from './homeWork/July_16_2025/MoodCard';
// import MusicPlayer from './homeWork/July_18_2025/MusicPlayer';
// import Timer from './homeWork/July_18_2025/Timer';
// import UserSurveyForm from './homeWork/July_21_2025/UserSurveyForm';
import UserList from "./homeWork/July_25_2025/UserList";

function App() {
   const users = [
    { id: 1, name: "Олег" },
    { id: 2, name: "Марія" },
    { id: 3, name: "Іван" }
  ];
  // const [mood, setMood] = React.useState("😊");
  // const [comment, setComment] = React.useState("");
  return (
     <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* <h1>🎧 My React App</h1>
      <MusicPlayer />
      <Timer /> */}
      {/* <UserSurveyForm /> */}
      <UserList users={users} />
    </div>
  );
}
  

export default App;
