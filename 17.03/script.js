// Завдання 1
const Button = {
    width: 100,
    height: 50,
    text: "Click me",
    showInfo() {
        console.log(`Button: ${this.width}x${this.height}, Text: ${this.text}`);
    }
};

const BootstrapButton = Object.create(Button);
BootstrapButton.color = "blue";
BootstrapButton.showInfo = function() {
    console.log(`Button: ${this.width}x${this.height}, Text: ${this.text}, Color: ${this.color}`);
};

console.log(Object.getPrototypeOf(BootstrapButton) === Button); // true

// Завдання 2
const Shape = {
    getName() {
        return this.name;
    },
    getInfo() {
        console.log(`Shape: ${this.getName()}, Sides: ${this.sides}`);
    },
    getArea() {
        return null;
    },
    getPerimeter() {
        return null;
    }
};

const Square = Object.create(Shape);
Square.name = "Square";
Square.sides = [4, 4, 4, 4];
Square.getArea = function() {
    return this.sides[0] ** 2;
};
Square.getPerimeter = function() {
    return this.sides.reduce((sum, side) => sum + side, 0);
};

console.log(Object.getPrototypeOf(Square) === Shape); // true

const Rectangle = Object.create(Shape);
Rectangle.name = "Rectangle";
Rectangle.sides = [4, 6, 4, 6];
Rectangle.getArea = function() {
    return this.sides[0] * this.sides[1];
};
Rectangle.getPerimeter = function() {
    return this.sides.reduce((sum, side) => sum + side, 0);
};

const Triangle = Object.create(Shape);
Triangle.name = "Triangle";
Triangle.sides = [3, 4, 5];
Triangle.getArea = function() {
    const p = this.getPerimeter() / 2;
    return Math.sqrt(p * (p - this.sides[0]) * (p - this.sides[1]) * (p - this.sides[2]));
};
Triangle.getPerimeter = function() {
    return this.sides.reduce((sum, side) => sum + side, 0);
};

console.log(Object.getPrototypeOf(Triangle) === Shape); // true

// Завдання 3
const ExtendedArray = Object.create(Array.prototype);

ExtendedArray.getString = function(separator = ",") {
    return this.join(separator);
};

ExtendedArray.getHtml = function(tagName = "div") {
    if (tagName === "li") {
        return `<ul>${this.map(item => `<li>${item}</li>`).join("")}</ul>`;
    }
    return this.map(item => `<${tagName}>${item}</${tagName}>`).join("");
};

const myArray = Object.create(ExtendedArray);
myArray.push("Apple", "Banana", "Cherry");

console.log(Object.getPrototypeOf(myArray) === ExtendedArray); // true
