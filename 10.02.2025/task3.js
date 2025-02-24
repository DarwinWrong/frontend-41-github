const taxiDriver = {
    name: 'John',
    pickUpPassenger: function (namePassenger, callback) {
        callback.call(this, namePassenger);
    },
    startDrive: function (namePassenger) {
        console.log(`Таксист ${this.name} підбирає пасажира ${namePassenger}`);
        console.log(`Поїздка почалась!`);
    },
}
taxiDriver.pickUpPassenger('Alice', taxiDriver.startDrive);