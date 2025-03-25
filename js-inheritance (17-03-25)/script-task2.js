function Shape() {}

Shape.prototype.getName = function () {
  return this.name || 'Shape';
};

Shape.prototype.getInfo = function () {
  if (this.sides && this.sides.length > 0) {
    return 'Sides: ' + this.sides.join(', ');
  }
  return 'No sides defined';
};

Shape.prototype.getArea = function () {
  return null;
};

Shape.prototype.getPerimeter = function () {
  return null;
};

function Square(side) {
  this.side = side;
  this.sides = [side, side, side, side];
  this.name = 'Square';
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.getArea = function () {
  return this.side * this.side;
};

Square.prototype.getPerimeter = function () {
  return 4 * this.side;
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.sides = [width, height, width, height];
  this.name = 'Rectangle';
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.sides = [a, b, c];
  this.name = 'Triangle';
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getArea = function () {
  var s = (this.a + this.b + this.c) / 2;
  return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
};

Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};

var mySquare = new Square(5);
var myRectangle = new Rectangle(4, 7);
var myTriangle = new Triangle(3, 4, 5);

console.log('Shape: ' + mySquare.getName());
console.log(mySquare.getInfo());
console.log('Area: ' + mySquare.getArea());
console.log('Perimeter: ' + mySquare.getPerimeter());
console.log('Prototype of mySquare:', Object.getPrototypeOf(mySquare));
console.log('');

console.log('Shape: ' + myRectangle.getName());
console.log(myRectangle.getInfo());
console.log('Area: ' + myRectangle.getArea());
console.log('Perimeter: ' + myRectangle.getPerimeter());
console.log('Prototype of myRectangle:', Object.getPrototypeOf(myRectangle));
console.log('');

console.log('Shape: ' + myTriangle.getName());
console.log(myTriangle.getInfo());
console.log('Area: ' + myTriangle.getArea());
console.log('Perimeter: ' + myTriangle.getPerimeter());
console.log('Prototype of myTriangle:', Object.getPrototypeOf(myTriangle));
