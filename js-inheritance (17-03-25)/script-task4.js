function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Car.prototype.getInfo = function () {
  return this.year + ' ' + this.brand + ' ' + this.model;
};

function ElectricCar(brand, model, year, batteryCapacity) {
  Car.call(this, brand, model, year);
  this.batteryCapacity = batteryCapacity;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.getInfo = function () {
  var baseInfo = Car.prototype.getInfo.call(this);
  return baseInfo + ', Battery Capacity: ' + this.batteryCapacity + ' kWh';
};

var myCar = new Car('Toyota', 'Corolla', 2020);
console.log('Car Info: ' + myCar.getInfo());

var myElectricCar = new ElectricCar('Tesla', 'Model S', 2022, 100);
console.log('Electric Car Info: ' + myElectricCar.getInfo());

console.log(
  'Prototype of myElectricCar:',
  Object.getPrototypeOf(myElectricCar),
);
console.log(
  'Is myElectricCar an instance of ElectricCar?',
  myElectricCar instanceof ElectricCar,
);
console.log(
  'Is myElectricCar an instance of Car?',
  myElectricCar instanceof Car,
);
