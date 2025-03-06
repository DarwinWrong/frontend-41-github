const pizzaShop = {
    name: 'Марко',
    takeOrder: function(pizzaName, callback) {
      document.getElementById('pizzaOutput').innerHTML = `Піцайоло ${this.name} прийняв замовлення на піцу: ${pizzaName}`;
      callback.call(this, pizzaName);
    }
  };
  
  function orderReady(pizzaName) {
    document.getElementById('pizzaOutput').innerHTML += `<br>Піца ${pizzaName} готова!`;
  }
  
  function takePizzaOrder() {
    pizzaShop.takeOrder('Пепероні', orderReady);
  }
  
  const theater = {
    actors: ['Олег', 'Марія', 'Іван'],
    assignRole: function(actorName, callback) {
      document.getElementById('theaterOutput').innerHTML = `Актор ${actorName} отримав роль.`;
      callback.call(this, actorName);
    }
  };
  
  function assignRole(actorName) {
    document.getElementById('theaterOutput').innerHTML += `<br>Актор ${actorName} грає роль: Гамлет`;
  }
  
  function assignActorRole() {
    theater.assignRole('Олег', assignRole);
  }
  
  const taxiDriver = {
    name: 'Іван',
    pickUpPassenger: function(passengerName, callback) {
      document.getElementById('taxiOutput').innerHTML = `Таксист ${this.name} підбирає пасажира ${passengerName}`;
      callback.call(this);
    }
  };
  
  function startRide() {
    document.getElementById('taxiOutput').innerHTML += '<br>Поїздка почалась!';
  }
  
  function pickUpPassenger() {
    taxiDriver.pickUpPassenger('Марія', startRide);
  }
  
  const concert = {
    singer: 'Олександр',
    startShow: function(songName, callback) {
      callback.call(this, songName);
    }
  };
  
  function perform(songName) {
    document.getElementById('concertOutput').innerHTML = `Співак ${this.singer} виконує пісню: "${songName}"`;
  }
  
  function startConcert() {
    concert.startShow('Літній вечір', perform);
  }
  