class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }
    showInfo() {
        console.log(`Button width: ${this.width}, height: ${this.height}, text: ${this.text}`);
    }
}

class BootstrapButton extends Button {
    constructor(width, height, text, color) {
        super(width, height, text);
        this.color = color;
    }
    showInfo() {
        console.log(`Button width: ${this.width}, height: ${this.height}, text: ${this.text}, color: ${this.color}`);
    }

}

const btn = new Button(100, 50, 'Click me');
btn.showInfo();

const btn2 = new BootstrapButton(200, 100, 'Click me', 'red');
btn2.showInfo();

console.log(Object.getPrototypeOf(BootstrapButton.prototype) === Button.prototype);