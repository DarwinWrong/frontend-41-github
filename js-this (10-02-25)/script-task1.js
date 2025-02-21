const pizzaShop = {
    pizzaiolo: 'Marco',
    takeOrder: function (pizza, callback) {
        console.log(`Pizzaiolo ${this.pizzaiolo} has accepted a pizza order: ${pizza}`);
        callback.call(this, pizza);
    }
};

pizzaShop.takeOrder('Pepperoni', function (pizza) {
    console.log(`The ${pizza} pizza is ready!`);
});
