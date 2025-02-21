class Person {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

class Chef extends Person {
    cook(order, callback) {
        console.log(`${this.name} is cooking ${order}...`);
        callback(order);
    }
}

class Waiter extends Person {
    takeOrder(order) {
        Restaurant.makeOrder(order, function (dish) {
            addDishToMenuDOM(dish);
        });
    }
}

const Restaurant = {
    menu: [],
    staff: [],
    addStaff: function (person) {
        this.staff.push(person);
    },
    makeOrder: function (order, callback) {
        const chef = this.staff.find(person => person.role === "Chef");
        if (chef) {
            chef.cook(order, (dish) => {
                this.menu.push(dish);
                callback(dish);
            });
        } else {
            console.log("No chef available!");
        }
    }
};

function addDishToMenuDOM(dish) {
    const menuList = document.getElementById("menuList");
    const li = document.createElement("li");
    li.textContent = dish;
    menuList.appendChild(li);
}

const chefJohn = new Chef("John", "Chef");
const waiterAnna = new Waiter("Jane", "Waiter");

Restaurant.addStaff(chefJohn);
Restaurant.addStaff(waiterAnna);

document.getElementById("orderButton").addEventListener("click", function () {
    const orderInput = document.getElementById("orderInput");
    const order = orderInput.value.trim();
    if (order !== "") {
        waiterAnna.takeOrder(order);
        orderInput.value = "";
    } else {
        alert("Please enter an order.");
    }
});
