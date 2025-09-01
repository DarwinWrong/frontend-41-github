//! 1
// class UserManager {
//   constructor() {
//     this.users = [];
//   }
//   addUser(user) {
//     this.users.push(user);
//   }
//   removeUser(name) {
//     this.users = this.users.filter((user) => user.name !== name);
//   }
//   listUsers() {
//     this.users.forEach((user) => {
//       console.log(user.name);
//     });
//   }
// }
// const users = new UserManager();
// users.addUser({ name: "Василь" });
// users.addUser({ name: "Микола" });
// users.removeUser("Василь");
// users.listUsers();
//! 3
// let text = "Cat runs. Dog runs. Cat jumps.";
// let searchWords = ["cat", "dog"];
// let replaceWords = ["bird", "fish"];

// function replaceAnimal(str, searchWords, replaceWords) {
//   let words = str.split(" ");

//   words = words.map((word) => {
//     let lowerWord = word.toLowerCase();
//     let index = searchWords.indexOf(lowerWord);

//     if (index !== -1) {
//       if (word === word.toUpperCase()) {
//         return replaceWords[index].toUpperCase();
//       } else if (word === word[0].toUpperCase() + word.slice(1).toLowerCase()) {
//         return (
//           replaceWords[index][0].toUpperCase() +
//           replaceWords[index].slice(1).toLowerCase()
//         );
//       } else {
//         return replaceWords[index];
//       }
//     } else {
//       return word;
//     }
//   });

//   return console.log(words.join(" "));
// }
// replaceAnimal(text, searchWords, replaceWords);
//! 4
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let arr3 = [5, 6, 7, 8, 9];
let arr4 = [7, 8, 9, 10, 11];
const megaArr = arr1.concat(arr2, arr3, arr4).sort((a, b) => a - b); //1
const uniqueNumbers = [...new Set(megaArr)]; //2
// 3
function dublicat(arr) {
  return [...new Set(arr.filter((elem, index) => arr.indexOf(elem) !== index))];
}
const dublicated = dublicat(megaArr);
//! 4 недороблено
// const simplNumbers = megaArr.forEach(num=>{
//   let arr = []
//   if(num > 1 && num % num === 0){
//     arr.push(num)
//   }
// })
// const si
// console.log(dublicated);

// console.log(uniqueNumbers);

// console.log(megaArr);
