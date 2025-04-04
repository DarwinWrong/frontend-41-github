// ===================
// Inharitance
// ===================
class ModernCar extends Car {}
const modernCar = new ModernCar({ name: 'Benkli', speed: '350 km/h' });
modernCar.carInfo();
console.log('ModernCar:', modernCar);

console.log('modernCar.type', modernCar.type);
console.log('Car.type', Car.type);
console.log('ModernCar.type', ModernCar.type);

const carType = Car.type;
console.groupEnd('Car.type', carType);
