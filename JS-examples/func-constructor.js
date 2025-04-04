function Animal(name, speed) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function (speed) {
  this.speed += speed;
  console.log(`${this.name} runs with speed ${this.speed}`);
};

const dog = new Animal('Dog', 10);
console.log('dog:', dog);

dog.run(5);
