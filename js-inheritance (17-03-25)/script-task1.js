function Button(width, height, text) {
  this.width = width;
  this.height = height;
  this.text = text;
}

Button.prototype.showInfo = function () {
  console.log(
    'Button Info: ' + this.text + ' (' + this.width + 'x' + this.height + ')',
  );
};

function BootstrapButton(width, height, text, color) {
  Button.call(this, width, height, text);
  this.color = color;
}

BootstrapButton.prototype = Object.create(Button.prototype);
BootstrapButton.prototype.constructor = BootstrapButton;

BootstrapButton.prototype.showInfo = function () {
  console.log(
    'BootstrapButton Info: ' +
      this.text +
      ' (' +
      this.width +
      'x' +
      this.height +
      '), Color: ' +
      this.color,
  );
};

var myButton = new Button(100, 50, 'Click Me');
myButton.showInfo();

var myBootstrapButton = new BootstrapButton(120, 60, 'Submit', 'blue');
myBootstrapButton.showInfo();

console.log(
  'Prototype of myBootstrapButton:',
  Object.getPrototypeOf(myBootstrapButton),
);
console.log(
  "Is myBootstrapButton's prototype equal to BootstrapButton.prototype?",
  Object.getPrototypeOf(myBootstrapButton) === BootstrapButton.prototype,
);
