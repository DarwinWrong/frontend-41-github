function BankAccount(owner, balance) {
  this.owner = owner;
  this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(amount + ' deposited. New balance: ' + this.balance);
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    console.log('Insufficient funds. Current balance: ' + this.balance);
  } else {
    this.balance -= amount;
    console.log(amount + ' withdrawn. New balance: ' + this.balance);
  }
};

function SavingsAccount(owner, balance, interestRate) {
  BankAccount.call(this, owner, balance);
  this.interestRate = interestRate;
}

SavingsAccount.prototype = Object.create(BankAccount.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

SavingsAccount.prototype.addInterest = function () {
  var interest = this.balance * this.interestRate;
  this.balance += interest;
  console.log('Interest added: ' + interest + '. New balance: ' + this.balance);
};

var myAccount = new BankAccount('John Doe', 1000);
myAccount.deposit(500);
myAccount.withdraw(200);

console.log('-----');

var mySavings = new SavingsAccount('Jane Doe', 2000, 0.05);
mySavings.deposit(1000);
mySavings.withdraw(500);
mySavings.addInterest();

console.log('Prototype of mySavings:', Object.getPrototypeOf(mySavings));
console.log(
  'Is mySavings an instance of SavingsAccount?',
  mySavings instanceof SavingsAccount,
);
console.log(
  'Is mySavings an instance of BankAccount?',
  mySavings instanceof BankAccount,
);
