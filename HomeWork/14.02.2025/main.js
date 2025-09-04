// const ZooManager = {
//   animals: [],
//   addAnimal(animalName) {
//     this.animals.push(animalName);
//   },
//   showAnimals() {
//     console.log(this.animals);
//   },
//   performAction(animalName, actionCallback) {
//     const animal = this.animals.find((animal) => animal.name === animalName);
//     if (animal) {
//       animal.action(actionCallback);
//     } else {
//       console.log(`Тварини ${animalName} немає унашому зоопарку`);
//     }
//   },
// };
// const allActions = {
//   eat() {
//     console.log(`${this.name} їсть`);
//   },
//   sleep() {
//     console.log(`${this.name} спить`);
//   },
//   walk() {
//     console.log(`${this.name} гуляє`);
//   },
// };
// function getRandomAction() {
//   const allActionsKeys = Object.keys(allActions);
//   //   console.log(allActionsKeys);

//   const randomAction = Math.floor(Math.random() * allActionsKeys.length);
//   //   console.log(randomAction);
//   //   console.log(allActions[allActionsKeys[randomAction]]);

//   return allActions[allActionsKeys[randomAction]];
// }
// const lion = {
//   name: "Ікло",
//   type: "Хижий",
//   energy: 10,
//   action(callback) {
//     callback.call(this);
//   },
// };
// ZooManager.addAnimal(lion);
// ZooManager.showAnimals();
// const divActBtn = document.getElementById("actionBtn");
// ZooManager.animals.forEach((animal) => {
//   const btn = document.createElement("button");
//   btn.textContent = animal.name;

//   btn.addEventListener("click", () => {
//     ZooManager.performAction(animal.name, getRandomAction());
//   });
//   divActBtn.append(btn);
// });
//!2Ресторан

const restaurant = {
  menu: [],
};
