function displayOutput(text) {
    const output = document.getElementById("output");
    output.innerHTML += `<p>${text}</p>`;
}

const Button = {
    width: 100,
    height: 50,
    text: "Click me",
    showInfo: function() {
        return `Button: ${this.width}x${this.height}, text: "${this.text}"`;
    }
};

const BootstrapButton = Object.create(Button);
BootstrapButton.color = "blue";
BootstrapButton.showInfo = function() {
    return `Button: ${this.width}x${this.height}, text: "${this.text}", color: ${this.color}`;
};

document.getElementById("showButtonInfo").addEventListener("click", function() {
    displayOutput(BootstrapButton.showInfo());
});

const Shape = {
    getName: function() {
        return this.name;
    },
    getInfo: function() {
        return `Фігура: ${this.getName()}, Сторони: ${this.sides.join(", ")}`;
    },
    getArea: function() {
        return null;
    },
    getPerimeter: function() {
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
};

const Square = Object.create(Shape);
Square.name = "Квадрат";
Square.sides = [4, 4, 4, 4];
Square.getArea = function() {
    return this.sides[0] ** 2;
};

const Rectangle = Object.create(Shape);
Rectangle.name = "Прямокутник";
Rectangle.sides = [4, 6, 4, 6];
Rectangle.getArea = function() {
    return this.sides[0] * this.sides[1];
};

const Triangle = Object.create(Shape);
Triangle.name = "Трикутник";
Triangle.sides = [3, 4, 5];
Triangle.getArea = function() {
    let p = this.getPerimeter() / 2;
    return Math.sqrt(p * (p - this.sides[0]) * (p - this.sides[1]) * (p - this.sides[2]));
};

document.getElementById("showShapesInfo").addEventListener("click", function() {
    displayOutput(`${Square.getInfo()}\nПлоща: ${Square.getArea()}, Периметр: ${Square.getPerimeter()}`);
    displayOutput(`${Rectangle.getInfo()}\nПлоща: ${Rectangle.getArea()}, Периметр: ${Rectangle.getPerimeter()}`);
    displayOutput(`${Triangle.getInfo()}\nПлоща: ${Triangle.getArea()}, Периметр: ${Triangle.getPerimeter()}`);
});

function ExtendedArray(...args) {
    let arr = Object.create(ExtendedArray.prototype);
    arr.push(...args);
    return arr;
}

ExtendedArray.prototype = Object.create(Array.prototype);

ExtendedArray.prototype.getString = function(separator = ", ") {
    return this.join(separator);
};

ExtendedArray.prototype.getHtml = function(tagName = "div") {
    if (tagName === "li") {
        return `<ul>${this.map(item => `<li>${item}</li>`).join("")}</ul>`;
    }
    return this.map(item => `<${tagName}>${item}</${tagName}>`).join("");
};

const myArray = ExtendedArray("Apple", "Banana", "Cherry");

document.getElementById("showArrayInfo").addEventListener("click", function() {
    displayOutput(myArray.getString(" - "));
    displayOutput(myArray.getHtml("p"));
});
