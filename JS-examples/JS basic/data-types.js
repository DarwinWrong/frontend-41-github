/**************** Примітивні типи ********************/

// string — рядки:
let message = 'Hello, world!';

// number — числа (цілі та з плаваючою точкою):
let count = 42;
let price = 19.99;

// boolean — логічні значення (true або false):
let isAvailable = true;

// null — спеціальне значення, що означає відсутність значення:
let user = null;

// undefined — означає, що змінна оголошена, але їй не присвоєно значення:
let data;
console.log(data); // undefined

// symbol — унікальні ідентифікатори:
let id = Symbol('id');
let user1 = {
    [id]: 123
};
console.log(user1[id]); // 123

// Приховання ключа через Symbol
let id2 = Symbol('id');
let obj = {
    [id2]: 123,
    name: 'John'
};
console.log(Object.keys(obj)); // ['name']
console.log(obj[id2]); // 123

// Унікальність властивостей
// Модуль A
const idA = Symbol('id');
let objA = { [idA]: 'ModuleA' };
// Модуль B
const idB = Symbol('id');
let objB = { [idB]: 'ModuleB' };
console.log(objA[idA]); // 'ModuleA'
console.log(objB[idB]); // 'ModuleB'

// КОлекція властивостей object
let user2 = {
    name: 'John',
    age: 30,
    isAdmin: true
};
console.log(user2.name); // Виведе 'John'

