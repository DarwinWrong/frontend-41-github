const restaurant = {
    menu: [],
    staff: [],
    addStaff: function (person) {
        this.staff.push(person);
    },
    makeOrder: function (order, callback) {
        console.log('Замовлення в процесі');
        const chefOrder = this.staff.find(person => person.role === 'chef');
        if (chefOrder) {
            chefOrder.cook(order, dish => {
                callback(dish);
            });
        } else {
            console.log('Шеф-кухаря немає');
        }
    }
};

const person = (name, role) => {
    const newPerson = { name, role };
    if (role === 'waiter') {
        newPerson.takeOrder = function (order) {
            console.log(`Офіціант ${this.name} взяв замовлення ${order}`);
            restaurant.makeOrder(order, addToMenu);
        };
    } else if (role === 'chef') {
        newPerson.cook = function (order, callback) {
            console.log(`Кухар ${this.name} готує страву ${order}`);
            setTimeout(() => {
                console.log(`Страву ${order} готово`);
                callback(order);
            }, 2000);
        };
    }
    return newPerson;
}

const waiterPerson = person('Олександр', 'waiter');
const chefPerson = person('Ігор', 'chef');

restaurant.addStaff(waiterPerson);
restaurant.addStaff(chefPerson);

function addToMenu(order) {
    restaurant.menu.push(order);
    console.log(`Страву ${order} додано до меню`);
    updateMenu();
}

function updateMenu() {
    const menuList = document.getElementById('list');
    menuList.innerHTML = '';
    restaurant.menu.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        menuList.appendChild(li);
    });
}

const btn = document.getElementById('add');
btn.addEventListener('click', () => {
    const order = document.getElementById('order').value;
    waiterPerson.takeOrder(order);
});


