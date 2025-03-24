//! Set()
// var numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(2);
// numbers.add(3);
// console.log(numbers);
// console.log(numbers.has(3));
// numbers.delete(1);
// console.log(numbers);
// numbers.clear();
// console.log(numbers);
// const arr = ["one", "two", "three", "two"];
// const uniqArr = new Set(arr);
// console.log(uniqArr);
// const nameUser = document.getElementById("addName");
// const list = document.getElementById("userList");
// const usersArr = ["Kolia", "Maks", "Viktor"];
// const usersSet = new Set(usersArr);
// /**
//  * The function add a  new user to the list
//  *
//  * @param {string} name - User name
//  * @method updateList - update user list
//  */
// function addUser(name) {
//   usersSet.add(name);
//   nameUser.value = "";
//   updateList();
// }
// function updateList() {
//   list.innerHTML = "";
//   usersSet.forEach((user) => {
//     const li = document.createElement("li");
//     li.textContent = user;
//     document.getElementById("userList").appendChild(li);
//   });
// }
// document.getElementById("add").addEventListener("click", () => {
//   addUser(nameUser.value);
// });
// updateList();
//! Map()
// const map = new Map();
// console.log(map);
// map.set("name", "Kolia");
// map.set("age", 18);
// map.set(1, "one");
// map.set([1, 2], "Array as key");
// console.log(map);
// console.log(map.get("name"));
// console.log(map.get("age"));
// console.log(map.size);
const furniture = new Map();
furniture.set("Диван", 2);
function addFurniture(name, value) {
  furniture.set(name, value);
}
addFurniture("стіл", 2);
console.log(furniture);
