// 🏠 Завдання 3: Бюро нерухомості (Об'єкти)
// 🔹 Суть завдання:
//     Агент з нерухомості складає список будинків для продажу. Кожен будинок має адресу, ціну та статус ("вільний" чи "проданий").
// 🔹 Що потрібно зробити?
//     Створи функцію createHouse, яка приймає address, price, status та повертає об’єкт будинку.
//     Створи кілька будинків.
//     Об'єднай їх у масив houses.
// Додай функцію showHouses, яка перебирає масив houses та виводить інформацію про кожен будинок.
//

const showHouse = (house) => {
    for (let i = 0; i < house.length; i++) {
        console.log(`House address is ${house[i].address}`);
        console.log(`House price is ${house[i].price}`);
        console.log(`House status is ${house[i].status}`);
        console.log(`----------------------`);
    }
}

const createHouse = (address, price, status) => {
    let houses = [];
    if (status === 'free' || status === 'owned') {
        let dom = {
            address: address,
            price: price,
            status: status
        };
        houses[houses.length] = dom;
        showHouse(houses);
    } else {
        console.log(`Status invalid`);
    }
}

createHouse('a', 1, 'free');
createHouse('b', 2, 'owned');
createHouse('c', 3, 'free');
createHouse('d', 4, 'd');