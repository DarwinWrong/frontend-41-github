const Car = {
    brand: '',
    model: '',
    year: 0,
    getInfo() {
      return `Авто: ${this.brand} ${this.model}, ${this.year} р.`;
    }
  };
  
  const ElectricCar = Object.create(Car);
  ElectricCar.batteryCapacity = 0;
  ElectricCar.getInfo = function () {
    return `${Car.getInfo.call(this)}, акумулятор: ${this.batteryCapacity} кВт·год`;
  };
  
  function showCar() {
    const tesla = Object.create(ElectricCar);
    tesla.brand = 'Tesla';
    tesla.model = 'Model Y';
    tesla.year = 2022;
    tesla.batteryCapacity = 75;
  
    const output = `${tesla.getInfo()}\nУспадковування: ${Object.getPrototypeOf(tesla) === ElectricCar}`;
    document.getElementById('carOutput').textContent = output;
  }
  
  const Book = {
    title: '',
    author: '',
    year: 0,
    getSummary() {
      return `${this.title} від ${this.author}, ${this.year} р.`;
    }
  };
  
  const Ebook = Object.create(Book);
  Ebook.fileSize = 0;
  Ebook.getSummary = function () {
    return `${Book.getSummary.call(this)}, розмір: ${this.fileSize}MB`;
  };
  
  function showBooks() {
    const books = [
      Object.assign(Object.create(Book), {
        title: 'Кобзар', author: 'Тарас Шевченко', year: 1840
      }),
      Object.assign(Object.create(Ebook), {
        title: 'Clean Code', author: 'Robert C. Martin', year: 2008, fileSize: 4
      }),
      Object.assign(Object.create(Book), {
        title: '1984', author: 'George Orwell', year: 1949
      }),
      Object.assign(Object.create(Ebook), {
        title: 'JS: The Good Parts', author: 'Douglas Crockford', year: 2008, fileSize: 2
      })
    ];
  
    let result = '';
    books.forEach(book => {
      result += book.getSummary() + '\n';
    });
  
    document.getElementById('bookOutput').textContent = result;
  }
  
  const BankAccount = {
    owner: '',
    balance: 0,
    deposit(amount) {
      if (amount > 0) this.balance += amount;
    },
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log('Недостатньо коштів або неправильна сума.');
      }
    }
  };
  
  const SavingsAccount = Object.create(BankAccount);
  SavingsAccount.interestRate = 0;
  SavingsAccount.addInterest = function () {
    this.balance += this.balance * this.interestRate / 100;
  };
  
  function showBank() {
    const acc = Object.create(SavingsAccount);
    acc.owner = 'Олег';
    acc.balance = 1000;
    acc.interestRate = 10;
  
    acc.deposit(500);
    acc.withdraw(300);
    acc.addInterest();
  
    const output = `Власник: ${acc.owner}\nПоточний баланс: ${acc.balance} грн\nУспадковування: ${Object.getPrototypeOf(acc) === SavingsAccount}`;
    document.getElementById('bankOutput').textContent = output;
  }
  