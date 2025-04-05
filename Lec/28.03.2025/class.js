// class Animal {
//   constructor(name, speed) {
//     this.name = name;
//     if(typeof speed === "undefined"){
//         this.speed = 0
//     }else{
//         this.speed = speed
//     }
//   }
//   run(speed) {
//     console.log(typeof speed);

//     this.speed += speed;
//     console.log(`${this.name} run with speed: ${this.speed}`);
//   }
// }
// const bird = new Animal("Tom");
// console.log(bird);
// bird.run(2);

// class Car {
//   static type = "vehicle";

//   constructor(option) {
//     this.name = option.name;
//     this.speed = option.speed;
//   }
//   carInfo() {
//     console.log(`Car name ${this.name}, speed ${this.speed}`);
//   }
// }
// const zaporozhets = new Car({ name: "Zaporozhets", speed: "300 km/h" });
// class ModernCar extends Car {}
// const moderCar = new ModernCar({ name: "Mers", speed: "350 km/h" });
// moderCar.carInfo();
// // console.log(moderCar);
// // console.log(ModernCar.type);
// // console.log(moderCar.type);
// // console.log(Car.type);
// // console.log(zaporozhets.type);
// const carType = Car.type;
// console.log(carType);
//! Інкапсуляція
// class BankAccount {
//   #balance = 0;// можна використовувати тільки в середині класа
//   constructor(owner) {
//     this.owner = owner
//   }
//   getBalabce(){
//     return console.log(this.#balance);
    
//   }
// }
// const account = new BankAccount("Oleh")
// account.getBalabce()//можна вивести, приватну зміну, тільки через створений метод
//! Поліморфізм
// class Build{
//     constructor(type){
//         this.type = type
//     }
//     build(){
//         console.log(`${this.type} is building`);
        
//     }
// }
// class House extends Build{
//     build(){
//         console.log(`${this.type} is type of build`);
        
//     }
// }
// const build = new Build("Home")
// build.build()
// const builded = new House("Home")
// builded.build()
//!super
class Market {  
    constructor(option) {
      this.type = option.type;
    }
    info() {
      console.log(`Market type: ${this.type}`);
    }
  }
class ATB extends Market{
    constructor(options){
        super(options);
        this.name = options.name
    }
    info(){
        super.info()
        console.log(`Market name: ${this.name}`);
        
    }
}
const atb = new ATB({name:"АТБ", type:'supermarket'})
atb.info()