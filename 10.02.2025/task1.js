const pizzaShop = {
  name: "Марко",
  takeOrder: function (pizzaName, callback) {
    console.log(
      `Піцайоло ${this.name} прийняв замовлення на піцу: ${pizzaName}`
    );
    callback.call(this, pizzaName);
  },
  makePizza: function (pizzaName) {
    console.log(`Піца ${pizzaName} готова!`);
  },
};
pizzaShop.takeOrder("Пепероні", pizzaShop.makePizza);
