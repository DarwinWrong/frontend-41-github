const numbers = [1, 2, 3, 4];
const doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);
console.log(numbers);
const user = {
  name: "Oleg",
  age: 20,
  getName() {
    console.log(`User name: ${this.name}`);
    () => console.log(`user age: ${this.age}`);
  },
  getAge: () => console.log(`user age: ${this.age}`), //
  logarrowFunv: () => console.log(this),
  getInfo: (function (self) {
    return () => console.log(self);
  })(this),
};
user.getName();
user.getAge();
user.logarrowFunv();
user.getInfo();
