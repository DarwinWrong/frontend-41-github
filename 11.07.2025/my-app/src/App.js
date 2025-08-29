import './App.css';
import { UserCard } from './components/UserCard';
function App() {
  return (
    <div>
      <UserCard name="Іван" age={30} email="ivan@example.com" hobby="Програмування" />
      <UserCard name="Анна" age={25} email="anna@example.com" hobby="Дизайн" />
      <UserCard name="Петро" age={28} email="petro@example.com" hobby="Спорт" />
      <UserCard name="Марія" age={22} email="maria@example.com" hobby="Малювання" />
    </div>
  );
}

export default App;
