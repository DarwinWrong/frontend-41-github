// [[Prototype]]
//! 1 Method: __proro__
let animal = {
  eats: true,
  walk() {
    console.log(`The animal walks`);
  },
};
// let rabbit = {
//   jumps: true,
// };
// rabbit.__proto__ = animal;
// console.log(rabbit.walk());
//!Object.create
// let rabbit = Object.create(animal);
// rabbit.jumps = true;
// console.log(rabbit.eats);
// rabbit.walk();
// let dog = {};
// Object.setPrototypeOf(dog, animal) //! не рекомендується для використання
// console.log(Object.getPrototypeOf(rabbit) === animal);
// console.log(dog.eats);
//1
// const Button = {
//   width: 100,
//   heigth: 50,
//   text: "Hello",
//   showInfo() {
//     console.log(
//       `Кнопка розміром ${this.width} на ${this.length}, має текст: ${this.text}`
//     );
//   },
// };
// const BootstrapButton = Object.create(Button);
// BootstrapButton.color = "Blue";
// BootstrapButton.showInfo = function () {
//   console.log(
//     `Кнопка розміром ${this.width} на ${this.length}, має текст: ${this.text} та колір ${this.color}`
//   );
// };
// Button.showInfo();
// console.log(Object.getPrototypeOf(BootstrapButton) === Button);

// BootstrapButton.showInfo();
//2
// const Shape = {
//   name: "",
//   area: null,
//   perimetr: null,
//   getName(name) {
//     return (this.name = name);
//   },
//   getInfo() {
//     return;
//   },
//   getArea() {
//     return this.area;
//   },
//   getPerimetr() {
//     return this.perimetr;
//   },
// };
// const Square = Object.create(Shape);
// Square.getName("Square");
// Square.side = 10;
// Square.getInfo = function () {
//   return console.log(`Фігура ${this.name} зі сторонами по ${this.side} см`);
// };
// Square.getArea = function () {
//   this.area = this.side * this.side;
//   return console.log(this.area);
// };
// Square.getPerimetr = function () {
//   this.perimetr = 4 * this.side;
//   return console.log(this.perimetr);
// };
// Square.getInfo();
// Square.getArea();
// Square.getPerimetr();

// const Rectangle = Object.create(Shape);
// Rectangle.getName("Rectangle");
// Rectangle.side1 = 12;
// Rectangle.side2 = 5;
// Rectangle.getInfo = function () {
//   console.log(
//     `Фігура ${this.name} зі сторонами по ${this.side1} та ${this.side2} см`
//   );
// };
// Rectangle.getArea = function () {
//   this.area = this.side1 * this.side2;
//   return console.log(this.area);
// };
// Rectangle.getPerimetr = function () {
//   this.perimetr = 2 * (this.side1 + this.side2);
//   return console.log(this.perimetr);
// };
// Rectangle.getInfo();
// Rectangle.getArea();
// Rectangle.getPerimetr();

// const Tringle = Object.create(Shape);
// Tringle.getName("Трикутник");
// Tringle.side1 = 10;
// Tringle.side2 = 10;
// Tringle.side3 = 5;
// Tringle.getInfo = function () {
//   console.log(
//     `Фігура ${this.name} зі сторонами по ${this.side1}, ${this.side2} та ${this.side3} см`
//   );
// };
// Tringle.getArea = function () {
//   let p = this.perimetr / 2;
//   this.area = Math.sqrt(
//     p * (p - this.side1) * (p - this.side2) * (p - this.side3)
//   );
//   return console.log(this.area);
// };
// Tringle.getPerimetr = function () {
//   this.perimetr = this.side1 + this.side2 + this.side3;
//   return console.log(this.perimetr);
// };
// Tringle.getInfo();
// Tringle.getPerimetr();
// Tringle.getArea();
// console.log(Object.getPrototypeOf(Square) === Shape);
// console.log(Object.getPrototypeOf(Tringle) === Shape);
// console.log(Object.getPrototypeOf(Rectangle) === Shape);
//3

const ExtenderArray = Object.create(Array.prototype);
ExtenderArray.getString = function (separator) {
  if (separator === "|") {
  }
};
ExtenderArray.push(1);
console.log(ExtenderArray);
