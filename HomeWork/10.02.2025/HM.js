const pizaShop = {
  name: "Василь",
  takeOrder(pizzaName, callback) {
    console.log(
      `Піцейоло ${pizaShop.name} прийняв замовлення на піцу: ${pizzaName}`
    );
    callback(pizzaName);
  },
};
pizaShop.takeOrder("Папероні", (pizzaName) => {
  console.log(`Піца ${pizzaName} готова`);
});
