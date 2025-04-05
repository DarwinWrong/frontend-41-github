let str = "Hello";
console.log(str);
console.log(str.length);

const person = {
  name: "Jone",
  age: 15,
  greet() {
    console.log(` Привіт я ${this.name}`);
  },
};
console.log(Object.getPrototypeOf(person) === Object.prototype);
const Oleh = Object.create(person);
console.log(Oleh);
Oleh.name = "Oleh";
Oleh.greet();
const Anna = { name: "Anna" };
Oleh.__proto__ = Anna;
console.log(Oleh);
