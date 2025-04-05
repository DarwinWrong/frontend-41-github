//! 4
// const Car = {
//   brand: "Audi",
//   model: "A6",
//   year: "2016",
//   getInfo() {
//     return `Машина ${this.brand}, ${this.model} моделі, ${this.year} року`;
//   },
// };
// const ElectricCar = Object.create(Car);
// ElectricCar.batteryCapacity = 20000;
// ElectricCar.getInfo = function () {
//   return `Машина ${this.brand}, ${this.model} моделі, ємність акумулятора ${this.batteryCapacity}, ${this.year} року`;
// };
// console.log(ElectricCar.getInfo());
//! 5
// const Book = {
//   title: "Гаррі Поттер та філософський камінь",
//   author: "Джоан Роулінг",
//   year: 1997,
//   getSummary(){
//     return `Кинга "${this.title}", написана ${this.author} у ${this.year} році`
//   }
// };
// const Ebook = Object.create(Book)
// Ebook.fileSize = 150
// Ebook.getSummary = function(){
//     return `Кинга "${this.title}", написана ${this.author} у ${this.year} році, розмір файлу ${this.fileSize} мб`
// }
// // console.log(Book.getSummary());
// // console.log(Ebook.getSummary());
// const books =[Book,Ebook]
// books.forEach((book)=>{
//     console.log(book.getSummary());

// })
//! 6
const BankAccount = {
  owner: "Микола",
  balance: 200,
  deposit(value) {
    this.balance += value;
    console.log(
      `рахунок поповнено на ${value} грн., поточний рахунок: ${this.balance} грн.`
    );
  },
  withdraw(value) {
    if (this.balance - value < 0) {
      console.log(
        `На рахунку не достатньо коштів. На вашому рахунку ${this.balance} грн.`
      );
    } else {
      this.balance -= value;
      console.log(
        `З вашого рахунку списано ${value} грн., залишилось ${this.balance} грн.`
      );
    }
  },
};
const SavingsAccount = Object.create(BankAccount);
SavingsAccount.interestRate = 20;
SavingsAccount.addInterest = function () {
  const interest = (this.balance * this.interestRate) / 100;
  this.balance += interest;
  console.log(this.balance);
};
BankAccount.deposit(100);
BankAccount.withdraw(50);
SavingsAccount.addInterest();
console.log(Object.getPrototypeOf(SavingsAccount));
