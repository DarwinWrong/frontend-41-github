//!Завдання 1
const pizaShop = {
  name: "Василь",
  takeOrder(pizzaName, callback) {
    console.log(
      `Піцейоло ${pizaShop.name} прийняв замовлення на піцу: ${pizzaName}`
    );
    callback.call(this, pizzaName);
  },
};
pizaShop.takeOrder("Папероні", (pizzaName) => {
  console.log(`Піца ${pizzaName} готова`);
});
//! Завдання 2

// const theater = {
//   names: ["Іван", "Марія", "Олег"],
//   roles: ["Ромео", "Джульєтта", "Бенволіо"],
//   assignRole(nameActor, callback) {
//     if (this.names.includes(nameActor)) {
//       callback.call(this, nameActor);
//     } else {
//       console.log("Такий актор не працює в нашому театрі");
//     }
//   },
// };
// theater.names.forEach((actor) => {
//   theater.assignRole(actor, function (name) {
//     const i = this.names.indexOf(name);
//     console.log(`Актор ${actor} виконує роль - ${this.roles[i]}`);
//   });
// });
//! Завдання 3
// const taxiDriver = {
//   driverName: "Василь",
//   pickUpPassenger(clientName, callback) {
//     callback.call(this, clientName);
//   },
// };
// taxiDriver.pickUpPassenger("Марія", function (clientName) {
//   console.log(`Таксист ${this.driverName} підбирає пасажира ${clientName}
//     Поїздка почалась!  `);
// });
//! Завдання 4
// const concert = {
//   startShow(callback,songName){
//     callback.call(this,songName)
//   }
// };
// concert.startShow(function(nameSong){
//   console.log(`Співак олег виконує пісню - ${nameSong}`);

// },"Dream On")
