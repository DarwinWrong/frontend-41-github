const Car = {
    init(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    },
    getInfo() {
        return `${this.brand} ${this.model}, ${this.year}`;
    }
};

const ElectricCar = Object.create(Car);
ElectricCar.init = function(brand, model, year, batteryCapacity) {
    Car.init.call(this, brand, model, year);
    this.batteryCapacity = batteryCapacity;
};
ElectricCar.getInfo = function() {
    return `${Car.getInfo.call(this)}, Battery: ${this.batteryCapacity} kWh`;
};

console.log(Object.getPrototypeOf(ElectricCar) === Car); // true
