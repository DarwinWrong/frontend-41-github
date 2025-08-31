
import UserCard from './homeWork/July_11_2025/UserCard';

function App() {
  const user = [
    {id:1, name: "John", age:21, email: "john@example.com", hobby:"Reading"},
    {id:2, name: "Jane", age:22, email: "jane@example.com", hobby:"Traveling"},
    {id:3, name: "Doe", age:23, email: "doe@example.com", hobby:"Cooking"},
    {id:4, name: "Alice", age:24, email: "alice@example.com", hobby:"Gardening"}

  ]
  return (
    <div >
      {user.map(user=>(
        <UserCard key={user.id} name={user.name} age={user.age} email={user.email} hobby={user.hobby}/>  
      ))}
    </div>
  );
}

export default App;
