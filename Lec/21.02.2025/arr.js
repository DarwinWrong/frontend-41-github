// var arr = new Array();
// arr[0] = 1;
// arr[1] = 2;
// console.log(arr);
// delete arr[1];
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "undefined") {
//     arr[i] = i + 1;
//   }
// }
// console.log(arr);
// const arr1 = [
//   [1, 2, 3],
//   [4, 6, 2],
// ];
// console.log(arr1[1][1]);
// const user = {};
// const arr2 = "Вася 14 Перемоги";

// function creatObj(obj, arr) {
//   const arrUser = arr.split(" ");
//   obj.name = arrUser[0];
//   obj.age = arrUser[1];
//   obj.street = arrUser[2];
//   console.log(obj);
// }
// creatObj(user, arr2);
// const arr3 = [1, 2, 1, 4, 1];
// var index = arr3.lastIndexOf(1);
// console.log(index);
//! push
// const arr = [1, 2, 3];
// arr.push(4)
// console.log(arr);
/**
 * Description placeholder
 *
 * @type {{}}
 */
const names = ["John", "Nik", "Alice"];
// names.push("Kolia");
// console.log(names);

// function addName(arr) {
//   const askname = prompt("Ведіть ім'я");
//   arr.push(askname);
//   console.log(arr);
//   return arr;
// }
// addName(names);
// names.pop();
// console.log(names);
// // console.log(names[1].split(""));
// names.shift();
// console.log(names);
names.unshift("Hello");
// console.log(names);
// names.splice(1, 1, "Agata", "hahahahah", "asadsddsds")
// console.log(names);

// console.log(names.splice(1, 1, "Agata") === names);

// const pets = ["cat", "dog", "parrot"];
// pets.splice(1, 1, "lion");
// console.log(pets);

// const arr = [1, 2, 1, 4, 1];

// var arrNew = arr.slice(0, 2);
// console.log(arrNew);
// var teams = ["Barcelona", "Real Madrid", "Manchester United", "Liverpool"];
// var bestTeams = teams.slice(2);
// console.log(bestTeams);
//! concat()- обєдання масиві, повертає новий масив
// var arr1 = [1, 3, 6];
// var arr2 = [7, 0, 2];
// var arr3 = [2, 4, 19];
// var allarrs = arr1.concat(arr2, arr3);
// console.log(allarrs);
// var fruits = ["apple", "banana"];
// var vegetable = ["cucumber", "potato"];
// var list = fruits.concat(vegetable);
// console.log(list);
// //! join()
// var cars = ["BMW", "Audi", "Mercedes"];
// console.log(cars.join("; "));
// let words = ["hello", "i like", "JS"];
console.log(words.join(" + "));

// const arr = [1, 2, 1, 4, 1];
// let check = arr.includes(5)
// console.log(check);
// var cars = ["BMW", "Audi", "Mercedes"];

// console.log(cars.includes("Audi"));
// cars.forEach((car, ind) => {
//   console.log(car);
//   console.log(ind);
// });
// var arr2 = ["Superman", "Spider-Man", "Batman"];
// arr2.forEach((person,index) => {
//   console.log(person);
//   console.log(index);
// });
//! map()
// var superheroes = ["Superman", "Spider-Man", "Batman"];
// let dancingHeroes = superheroes.map((hero) => {
//   let liters = hero.length;
//   return liters;
// });

// console.log(dancingHeroes);
//!find()
// const arr = [1, 2, 3, 4, 5];
// var found = arr.find((elem) => elem % 2 !== 0);
// console.log(found);
/**
 * Description placeholder
 *
 * @type {{}}
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
/**
 * Description placeholder
 *
 * @type {*}
 */
var found = arr.filter((elem) => elem % 2 !== 0);
console.log(found);
