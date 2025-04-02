const BankAccount = {
    init(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    },
    deposit(amount) {
        this.balance += amount;
    },
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }
};

const SavingsAccount = Object.create(BankAccount);
SavingsAccount.init = function(owner, balance, interestRate) {
    BankAccount.init.call(this, owner, balance);
    this.interestRate = interestRate;
};
SavingsAccount.addInterest = function() {
    this.balance += this.balance * (this.interestRate / 100);
};

console.log(Object.getPrototypeOf(SavingsAccount) === BankAccount);