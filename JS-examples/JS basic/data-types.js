/**************** Примітивні типи ********************/

// string — рядки:
let message = 'Hello, world!';
console.log('message:', message);
console.log(typeof message);

// number — числа (цілі та з плаваючою точкою):
let count = 42;
let price = 19.99;
console.log('count:', count);
console.log('price:', price);

// boolean — логічні значення (true або false):
let isAvailable = true;
console.log('isAvailable:', isAvailable);

// null — спеціальне значення, що означає відсутність значення:
let user = null;
console.log('user:', user);

// undefined — означає, що змінна оголошена, але їй не присвоєно значення:
let data;
console.log('data', data); // undefined

// symbol — унікальні ідентифікатори:
let id = Symbol('id');
let user1 = {
    [id]: 123
};
console.log('user1[id]', user1[id]); // 123

// Приховання ключа через Symbol
let id2 = Symbol('id');
let obj = {
    [id2]: 123,
    name: 'John'
};
console.log('Object.keys(obj)', Object.keys(obj)); // ['name']
console.log('obj[id2]', obj[id2]); // 123

// Унікальність властивостей
// Модуль A
const idA = Symbol('id');
let objA = { [idA]: 'ModuleA' };
// Модуль B
const idB = Symbol('id');
let objB = { [idB]: 'ModuleB' };
console.log('objA[idA]', objA[idA]); // 'ModuleA'
console.log('objB[idB]', objB[idB]); // 'ModuleB'

// КОлекція властивостей object
let user2 = {
    name: 'John',
    age: 30,
    isAdmin: true,
    docs: {
        passport: 'AA123456',
        driverLicense: 'BB123456'
    }
};
console.log('user2.name', user2.name); // Виведе 'John'
console.log('user2.age', user2.age);
console.log(Object.keys(user2)[1]);
console.log(Object.values(user2)[2]);

// Масиви
let users1 = ['John', 'Pete', 'Mary'];
let users2 = [
    { name: 'John', age: 30 },
    { name: 'Pete', age: 25 },
    { name: 'Mary', age: 28 }
];
console.log('users1[0]', users1[2]); // John

