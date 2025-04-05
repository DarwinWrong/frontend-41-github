// class User {
//   #balance = 0;
//   constructor(name) {
//     this._name = name;
//   }
//   get name() {
//     if (this._name) {
//       return this._name.toUpperCase();
//     } else {
//       return "no name";
//     }
//   }
//   get balance() {
//     return this.#balance;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       console.log("Name is too short");
//       return;
//     }
//     this._name = value;
//   }
// }
// const user1 = new User("Kolia");
// console.log(user1.name);
// user1.name = "Bobai";
// console.log(user1.name);
// console.log(user1.balance);

// class SubUser extends User {}
// const subUser = new SubUser();
// console.log(subUser.balance);
class Animal {
  constructor(name, speed) {
    this.name = name;
    if (typeof speed === "undefined") {
      this.speed = 0;
    } else {
      this.speed = speed;
    }
  }
  run(speed) {
    console.log(typeof speed);

    this.speed += speed;
    console.log(`${this.name} run with speed: ${this.speed}`);
  }
}
class Dog extends Animal {
  constructor(name, speed, health) {
    super(name, speed);
  }
  get health() {
    console.log(this.health);
  }
}
const dog1 = new Dog();
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
