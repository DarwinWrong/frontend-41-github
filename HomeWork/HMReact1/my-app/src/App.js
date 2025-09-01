import logo from "./logo.svg";
import "./App.css";
import { UserCard } from "./components/UserCard.js";

function App() {
  const users = [
    { name: "Олена", age: 25, email: "olena@example.com", hobby: "Малювання" },
    { name: "Іван", age: 30, email: "ivan@example.com", hobby: "Футбол" },
    { name: "Марія", age: 22, email: "maria@example.com", hobby: "Музика" },
    { name: "Петро", age: 28, email: "petro@example.com", hobby: "Подорожі" },
    { name: "Андрій", age: 35, email: "andrii@example.com", hobby: "Шахи" },
  ];
  return (
    <div>
      <h1>Список користувачів</h1>
      <div className="user_cards">
        {users.map((user, i) => {
          return (
            <UserCard
              key={i}
              name={user.name}
              age={user.age}
              email={user.email}
              hobby={user.hobby}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
