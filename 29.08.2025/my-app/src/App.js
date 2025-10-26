import React from "react";
import UserCard from "./components/UserCard";
import TodoList from "./components/TodoList";
import ListOrSingle from "./components/ListOrSingle";
import AtLeastOne from "./components/AtLeastOne";
import Product from "./components/Product";

function App() {
  //UserCard
  const correctUser = {
    name: "Anna",
    age: 25,
    email: "anna@example.com",
  }
  const wrongUser1 = {
    name: "Mark",
    age: "twenty-eight",
    email: "mark@example.com",
  }  //wrong

  //TodoList
  const todos1 = ["Купити хліб", "Помити посуд"]
  const todos2 = []
  const todosWrong = [123, "Помити посуд"] //wrong

  //ListOrSingle
  const dataArray = ["Хліб", "Молоко", "Сир"]
  const dataObject = { value: "Один елемент — Вода" }
  const wrongData = 123 // wrong

  //AtLeastOne
  const validItems = ["item1", "item2"]
  const emptyItems = []
  const notArray = "text"

  
  return (
    <>
      <UserCard user={correctUser} />
      <UserCard user={wrongUser1} />
      <TodoList todos={todos1} />
      <TodoList todos={todos2} />
      <TodoList todos={todosWrong} />
      <ListOrSingle data={dataArray} />
      <ListOrSingle data={dataObject} />
      <ListOrSingle data={wrongData} />
      <AtLeastOne items={validItems} />
      <AtLeastOne items={emptyItems} />
      <AtLeastOne items={notArray} />
      <Product product={{ title: "Молоко", price: 50 }} /> 
      <Product product={{ title: "Молоко", price: -10 }} /> 
      <Product product={{ title: "Молоко", price: "50" }} /> 

    </>
  );
}

export default App;
