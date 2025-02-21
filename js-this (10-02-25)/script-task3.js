const taxiDriver = {
    name: 'Ivan',
    pickUpPassenger: function (passenger, callback) {
        console.log(`Taxi driver ${this.name} picks up passenger ${passenger}`);
        callback.call(this);
    }
};

taxiDriver.pickUpPassenger('Maria', function () {
    console.log("The trip has begun!");
});
