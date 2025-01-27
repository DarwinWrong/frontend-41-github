// const c1 = {
//     name: 'John',
//     age: 25
// };
// c1.name = 'Tom';
// console.log(c1.name);

// const j1 = [1, 2, 3, 4, 5];
// j1[2] = 10;
// console.log(j1[2]);

// let a1 = 5;
// {
//     console.log(b1);
//     var b1 = 4;
//     console.log(a1);
// }

// console.log(a1);

// let string = 'Hello';
// let number = 123;
// let boolean = true; // false
// let id1 = Symbol('id');
// let id2 = Symbol('id');
// console.log(id1 === id2); // false

// console.log(typeof string); // string
// console.log(typeof number); // string
// console.log(typeof null); // string
// console.log(typeof NAN); // string
// console.log(typeof function () { });

// let a = 1;
// let b = 2;
// let c = a + b;
// console.log('c', c);
// c = b - a;
// console.log('c', c);
// c = a * b * 2;
// console.log('c', c);
// c = a / b;
// console.log('c', c);
// c = 10 % 3;
// console.log('c', c);
// c = 2 ** b;
// console.log('c', c);

// let d = a < b;
// console.log(a < b);
// console.log('d', d);
// d = a > b;
// console.log('d', d);
// b = 1;
// d = a <= b;
// console.log('d', d);
// a = 3;
// d = a >= b;
// console.log('d', d);
// d = a == b;
// console.log('d', d);
// b = '3';
// d = a == b;
// console.log('d', d);
// d = a === b;
// console.log('d', d);
// console.log(typeof a, typeof b, typeof a === typeof b);
// d = a != b;
// console.log('d', d);
// d = a !== b;
// console.log('d', d);

// a = true;
// b = false;
// let c = a && b;
// console.log('c', c);
// b = true;
// c = a && b;
// console.log('c', c);

// c = a || b;
// console.log('c', c);
// a = false;
// b = false;
// c = a || b;
// console.log('c', c);

// c = !a;
// console.log('c', c);
// c = a === b; //true
// console.log('c', c);

// console.log(c = a !== b)
// console.log(!c)

// let e = a ?? b;
// console.log(e);
// a = null;
// b = undefined;
// console.log(a ?? b);
// console.log(b ?? a);
// a = undefined;
// b = 1;
// console.log(b ?? a);
// a = 2;
// console.log(b ?? a);

// const animals = {
//     cat: {
//         call: 'Tom',
//         age: 3
//     },
//     bird: { //dog
//         name: undefined,
//         age: 5
//     }
// }
// console.log(animals.cat.name);
// // console.log(animals.dog.age); //error
// console.log(animals?.dog?.age); //error

// let c = 5;
// c += a; // c = c + a;
// console.log(c);
// c -= a; // c = c - a;
// console.log(c);
// c *= a; // c = c * a;
// console.log(c);
// c /= a; // c = c / a;


let a = 2, b = 10;
let c = a + b;

let max = c < 10;

if (max) {
    console.log('less than 10');
} else {
    console.log('more than 10');
}

let d = max ? 'less than 10' : 'more than 10';
console.log(d);

switch (true) {
    case max === true:
        console.log('less than 10');
        break;
    case max === false:
        console.log('more than 10');
        break;
    default: console.log('error');
}

