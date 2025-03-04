//! 1.1
// const character = {
//   name: "Шерлок",
//   age: 38,
//   profession: "Детектив",
//   mysterySolved: true,
// };
// function printInitials() {
//   console.log(
//     `Справу веде детектив ${this.name}, вік якого становить ${this.age}`
//   );
// }
// //! 1.2-1.3
// printInitials.call(character);
// delete character.mysterySolved;
// function findKey(obj, key) {
//   if (!Object.keys(obj).includes(key)) {
//     console.log("Властивість була успішно видалена");
//   } else {
//     console.log("Властивість не видалена");
//   }
// }
// findKey(character, "mysterySolved");
// //! 1.4
// const newCharacter = Object.create(character);
// newCharacter.Merried = true;
// console.log(newCharacter.Merried);
// //! 1.5
// function printAll(obj) {
//   for (const key in obj) {
//     console.log(`${key}: ${obj[key]}`);
//   }
// }
// printAll(character);
//! 2.1
/**
 * Description placeholder
 *
 * @type {{}}
 */
const names = ["John", "Sarah", "Michael", "Anna"];
//! 2.2
function evenNames(arr) {
  console.log(arr[1], arr[3]);
}
evenNames(names);
//! 2.3
/**
 * Description placeholder
 *
 * @param {*} arr
 */
function doSmth(arr) {
  for (const name of arr) {
    console.log(`Пересонаж ${name} бере учать у розслідувані`);
  }
}
doSmth(names);
//!2.4
/**
 * Description placeholder
 *
 * @type {{ name: string; printName(): void; }}
 */
const user = {
  name: "Ватсон",
  printName() {
    console.log(this.name);
  },
};
user.printName();
/**
 * Description placeholder
 *
 * @type {*}
 */
const newUser = Object.create(user);
newUser.age = 24;
console.log(newUser);
