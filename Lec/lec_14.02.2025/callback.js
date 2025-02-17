// const user = {
//   name: "Max",
// };
// const admin = {
//   name: "Bob",
// };
// function sayHi(obj) {
//   console.log(`Првіт, ${obj.name}`);
// }
// const person = {
//   name: "",
//   age: 18,
//   sayHi() {
//     console.log(`Привіт ${this.name}`);
//   },
//   sayHiNew(){
//     console.log(`Hi ${this.name} new`);

//   },
//   shiwAge(){
//     console.log(`Age ${this.age}`);

//   },
//   shiwAll(){
//     this.sayHi()
//     this.sayHiNew()
//     this.shiwAge()
//   }
// };
// const user = {name: "Nikole", sayHi: person.sayHi}
// user.sayHi()
// const user2 = Object.create(person)
// user2.name = "Alise"
// user2.age = 25
// // user2.sayHi()
// // user2.sayHiNew()
// // user2.shiwAge()
// user2.shiwAll()
function processData(a, b, callback) {
  const resalt = a + b;
  callback(resalt);
}
processData(4, 3, (resalt) => {
  console.log("resalt", resalt);
});
