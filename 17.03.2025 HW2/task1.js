class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `Car: ${this.brand} ${this.model} ${this.year}`;
    }
}
class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
        super(brand, model, year);
        this.batteryCapacity = batteryCapacity;
    }
    getInfo() {
        return `${super.getInfo()}, Battery Capacity: ${this.batteryCapacity}`;
    }
}

const tesla = new ElectricCar("Tesla", "Model S", 2023, "100 kWh");
const bmw = new Car("BMW", "X5", 2021);
console.log(bmw.getInfo());
console.log(tesla.getInfo());

console.log(Object.getPrototypeOf(ElectricCar.prototype) === Car.prototype);
