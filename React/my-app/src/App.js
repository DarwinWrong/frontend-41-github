import React from 'react';
// import MoodCard from './homeWork/July_16_2025/MoodCard';
// import MusicPlayer from './homeWork/July_18_2025/MusicPlayer';
// import Timer from './homeWork/July_18_2025/Timer';
// import UserSurveyForm from './homeWork/July_21_2025/UserSurveyForm';
// import UserList from "./homeWork/July_25_2025/UserList";
// import TextInput from './homeWork/August_18_2025/TextInput';
// import useLocalStorage from './homeWork/August_18_2025/useLocalStorage'
// import DreamShop from './homeWork/August_25_2025/DreamShop';
import Cart from './homeWork/August_22_2025/Cart';

function App() {
  //  const users = [
  //   { id: 1, name: "Олег" },
  //   { id: 2, name: "Марія" },
  //   { id: 3, name: "Іван" }
  // ];

  // const [name, setName] = useLocalStorage("username", "");
  // const [email, setEmail] = useLocalStorage("useremail", "");

  // const [mood, setMood] = React.useState("😊");
  // const [comment, setComment] = React.useState("");
  return (
     <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* <h1>🎧 My React App</h1>
      <MusicPlayer />
      <Timer /> */}
      {/* <UserSurveyForm /> */}
      {/* <UserList users={users} /> */}






      {/* --------------------- 18.08.2025 */}
            {/* <h2>LocalStorage Input Example</h2>
       <h2>LocalStorage Form Example</h2>

      <TextInput
        label="Your name:"
        value={name}
        onChange={setName}
        placeholder="Enter your name"
      />

      <TextInput
        label="Your email:"
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
      />

      <p>
        <strong>Saved Name:</strong> {name || "—"}
      </p>
      <p>
        <strong>Saved Email:</strong> {email || "—"}
      </p> */}



      {/* 25.08.2025 */}

{/* 
              <DreamShop/> */}


              {/* 22.08.2025 */}
      <Cart/>
    </div>
  );
}
  

export default App;
