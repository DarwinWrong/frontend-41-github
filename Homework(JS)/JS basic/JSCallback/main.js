const pizzaShop = {
    name: '',
    takeOrder(name, callback) {
        this.name = name;
        console.log(`Піцайоло Марко прийняв замовлення на піцу: ${this.name}`);
        callback.call(this, this.name);
    }
};


pizzaShop.takeOrder('Пепероні', function () {
    console.log(`Піца ${this.name} готова!`);
});


const theater = {
    actors: ['Oleg', 'Stepan'],
    assignRole(actor, role, callback) {
        for (let i = 0; i < this.actors.length; i++) {
            if (actor === this.actors[i]) {
                actor = this.actors[i];
                return callback.call(this, actor, role);
            }
        }
        return console.log('Error');
    }
}

theater.assignRole('Stepan', 'VanGog', function (actor,role){
    console.log(`Актор ${actor} грає роль: ${role} `);
});

const taxiDriver = {
    name: 'Adolf',
    taxiOrder(passengerName, callback) {
            callback.call(this,passengerName);
    }
}

taxiDriver.taxiOrder('Pedro', function (passengerName) {
    console.log(`Таксист ${this.name} підбирає пасажира ${passengerName}`);
})

const concert = {
    name: 'Співак Олександр',
    startShow(songName, callback) {
        callback.call(this,songName);
    }
}

concert.startShow('Літній вечір', function (songName) {
    console.log(`${this.name} виконує пісню: "${songName}"`);
})