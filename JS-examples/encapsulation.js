// ===================
// Encapsulation
// ===================
class BankAccount {
  #balance = 0; // private field

  constructor(owner) {
    this.owner = owner;
  }

  getBalance() {
    return this.#balance;
  }

  #showDirector() {
    console.log('Director');
  }

  showPersonal() {
    console.log('All personal is:');
    this.#showDirector();
  }
}

const account = new BankAccount('Oleh');
console.log(BankAccount.#balance); // Property '#balance' is not accessible outside class 'BankAccount' because it has a private identifier
// console.log(account.#balance); // Property '#balance' is not accessible outside class 'BankAccount' because it has a private identifier
// account.#showDirector(); // Property '#showDirector' is not accessible outside class 'BankAccount' because it has a private identifier
console.log('getBalance', account.getBalance());

account.showPersonal();
