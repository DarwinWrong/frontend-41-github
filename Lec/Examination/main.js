let orders = [];
let count = 0;
function createOrderSystem() {
  return {
    addOrder(customer, totalAmount) {
      const order = {
        id: (count += 1),
        name: customer,
        amount: totalAmount,
      };
      orders.push(order);
    },
    removeOrder(orderId) {
      //   orders.forEach((order) => {
      //     if (order.id === orderId) {
      //       //   orders.pop(order);
      //     //   delete orderId;
      //     }
      //   });
      orders = orders.filter((order) => order.id !== orderId);
    },
    getTotalRevenue() {
      const allAmount = orders.reduce((acum, order) => acum + order.amount, 0);
      return console.log(allAmount);
    },
    listOrders() {
      return console.log(orders);
    },
  };
}
const orderSystem = createOrderSystem();
orderSystem.addOrder("Nik", 500);
orderSystem.addOrder("Микола", 300);
orderSystem.getTotalRevenue();
orderSystem.removeOrder(2);
orderSystem.getTotalRevenue();
orderSystem.listOrders();
