class Shape {
    constructor(name) {
        this.name = name;

    }
    getName() {
        return this.name;
    }
    getInfo() {
        return `Figure ${this.name}`;
    }
    getArea() {
        return null;
    }
    getPerimeter() {
        return null;
    }
}

class Square extends Shape{
    constructor(side) {
        super("Square");
        this.side = side;
    }
    getInfo() {
        return `${super.getInfo()}, Side: ${this.side}`;
    }
    getArea() {
        return this.side ** 2;
    }
    getPerimeter() {
        return this.side * 4;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle')
        this.width = width;
        this.height = height;
    }
    getInfo() {
        return `${super.getInfo()}, Width: ${this.width}, Height: ${this.height}`;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}

class Triangle extends Shape{
    constructor(a, b, c) {
        super('Triangle');
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getInfo() {
        return `${super.getInfo()}, Sides: ${this.a}, ${this.b}, ${this.c}`;
    }
    getArea() {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
} 

const square = new Square(5);
console.log(square.getArea());

const rectangle = new Rectangle(4, 6);
console.log(rectangle.getPerimeter());

const triangle = new Triangle(3, 4, 5);
console.log(triangle.getInfo());

console.log(Object.getPrototypeOf(square) === Square.prototype);
console.log(Object.getPrototypeOf(rectangle) === Rectangle.prototype); 
console.log(Object.getPrototypeOf(triangle) === Triangle.prototype);