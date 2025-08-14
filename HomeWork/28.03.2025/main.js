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
//! 2
let text = "Cat runs. Dog runs. Cat jumps.";
let searchWords = ["cat", "dog"];
let replaceWords = ["bird", "fish"];

function replaceAnimal(str, searchWords, replaceWords) {
  let words = str.split(" ");
  //   words = words.forEach((word) => {
  //     if (word === searchWords[0]) {
  //       word = replaceWords[0];
  //       console.log(word);
  //     }
  //     if (word === searchWords[1]) {
  //       word = replaceWords[1];
  //     }
  //   }).join(' ');
  words = words.map((word) => {
    let lowerWord = word.toLowerCase();
    let index = searchWords.indexOf(lowerWord);

    if (index !== -1) {
      // Порівнюємо з урахуванням регістру
      if (word === word.toUpperCase()) {
        return replaceWords[index].toUpperCase(); // Зберігаємо великий регістр
      } else if (word === word[0].toUpperCase() + word.slice(1).toLowerCase()) {
        return (
          replaceWords[index][0].toUpperCase() +
          replaceWords[index].slice(1).toLowerCase()
        ); // Зберігаємо першу літеру великою
      } else {
        return replaceWords[index]; // Малий регістр
      }
    } else {
      return word;
    }
  });

  return console.log(words.join(" "));
}
replaceAnimal(text, searchWords, replaceWords);
