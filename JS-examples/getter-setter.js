class User {
  #balance = 0;

  constructor(name, balance) {
    this._name = name;
    this.#balance = balance;
  }

  get balance() {
    return this.#balance;
  }

  get name() {
    if (this._name) {
      return this._name.toUpperCase();
    } else {
      return 'No name';
    }
  }

  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short');
      return;
    }
    this._name = value;
  }
}

const user = new User('John', 100);
console.log(user.name);
user.name = 'Bob';
console.log(user.name);
console.log(user.balance);

// console.log(User.#balance);

class SubUser extends User {}
const subUser = new SubUser('Alice', 200);
console.log(subUser.balance);

// class ClassWithPrivateField {
//   #privateField;

//   constructor() {
//     this.#privateField = 42;
//   }
// }

// class Subclass extends ClassWithPrivateField {
//   #subPrivateField;

//   constructor() {
//     super();
//     this.#subPrivateField = 23;
//   }
// }

// const newClass1 = new ClassWithPrivateField();
// console.log(newClass1.#privateField);
// const newClass2 = new Subclass();
// console.log(newClass2.#privateField);
