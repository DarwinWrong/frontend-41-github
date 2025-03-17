const ZooManager = {
    animals: [],
    addAnimal(animal) {
      this.animals.push(animal);
    },
    showAnimals() {
      console.log(this.animals);
    },
    performAction(animalName, actionCallback) {
      const animal = this.animals.find(a => a.name === animalName);
      if (animal) {
        animal.action(actionCallback);
      }
    }
  };
  
  class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
      this.energy = 100;
    }
  
    action(callback) {
      callback.call(this);
    }
  }
  
  function eat() {
    this.energy += 10;
    document.getElementById('zooActions').innerHTML = `${this.name} поїв і тепер має енергію ${this.energy}`;
  }
  
  function sleep() {
    this.energy += 20;
    document.getElementById('zooActions').innerHTML = `${this.name} поспав і тепер має енергію ${this.energy}`;
  }
  
  function walk() {
    this.energy -= 10;
    document.getElementById('zooActions').innerHTML = `${this.name} погуляв і тепер має енергію ${this.energy}`;
  }
  
  ZooManager.addAnimal(new Animal('Лев', 'Хижак'));
  ZooManager.addAnimal(new Animal('Мавпа', 'Примат'));
  ZooManager.addAnimal(new Animal('Слон', 'Травоїд'));
  
  const zooButtonsContainer = document.getElementById('zooButtons');
  ZooManager.animals.forEach(animal => {
    const button = document.createElement('button');
    button.innerText = animal.name;
    button.onclick = function() {
      const actions = [eat, sleep, walk];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      ZooManager.performAction(animal.name, randomAction);
    };
    zooButtonsContainer.appendChild(button);
  });
  
  const Restaurant = {
    menu: [],
    staff: [],
    addStaff(person) {
      this.staff.push(person);
    },
    makeOrder(order, callback) {
      const chef = this.staff.find(p => p.role === 'Шеф-кухар');
      chef.cook(order, callback);
    }
  };
  
  class Person {
    constructor(name, role) {
      this.name = name;
      this.role = role;
    }
  }
  
  class Chef extends Person {
    cook(order, callback) {
      setTimeout(() => {
        Restaurant.menu.push(order);
        callback(order);
      }, 1000); 
    }
  }
  
  class Waiter extends Person {
    takeOrder(order) {
      Restaurant.makeOrder(order, dish => {
        const menuList = document.getElementById('menuList');
        const listItem = document.createElement('li');
        listItem.innerText = dish;
        menuList.appendChild(listItem);
      });
    }
  }
  
  const chef = new Chef('Олександр', 'Шеф-кухар');
  const waiter = new Waiter('Марія', 'Офіціант');
  Restaurant.addStaff(chef);
  Restaurant.addStaff(waiter);
  