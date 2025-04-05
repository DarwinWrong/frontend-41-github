// function makeClass(str) {
//   return class {
//     outputStr() {
//       return console.log(str);
//     }
//   };
// }
// const HiClass = makeClass("hi");
// const hi = new HiClass();
// hi.outputStr();
//! super()
// class Market {
//   constructor(option) {
//     this.type = option.type;
//   }
//   info() {
//     console.log(`Market type: ${this.type}`);
//   }
// }
// class ATB extends Market {
//   constructor(options) {
//     super(options);
//     this.name = options.name;
//   }
//   info() {
//     super.info();
//     console.log(`Market name: ${this.name}`);
//   }
// }
// const atb = new ATB({ name: "АТБ", type: "supermarket" });
// atb.info();
// atb.Hi = function () {
//   console.log("hi");
// };
// atb.Hi();
// console.log(atb);
//! поліморфізм + super()
class Build {
  constructor(type) {
    this.type = type;
  }
  build() {
    console.log(`${this.type} is building`);
  }
}
class House extends Build {
  build() {
    super.build();
    console.log(`${this.type} is type of build`);
  }
}
// const build = new Build("Home")
// build.build()
const builded = new House("Home");
builded.build();
