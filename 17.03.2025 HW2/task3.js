class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            return 'Коштів недостатньо';
        }
        this.balance -= amount;
        return this.balance;
    }
}

class SavingsAccount extends BankAccount{
    constructor(owner, balance, interestRate) {
        super(owner, balance);
        this.interestRate = interestRate;
    }
    addInterest() {
        this.balance += this.balance * this.interestRate;
        return this.balance;
    }
}

const account1 = new BankAccount('Bob', 1000);
console.log(account1.deposit(500));
console.log(account1.withdraw(2000));

const account2 = new SavingsAccount('Alice', 2000, 0.05);
console.log(account2.addInterest());

console.log(Object.getPrototypeOf(SavingsAccount.prototype) === BankAccount.prototype);
