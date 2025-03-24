//!1
// function calculate(a, b, onSuccses, onError) {
//   if (b === 0) {
//     return onError();
//   }
//   let resalt = a / b;
//   onSuccses(resalt);
// }
// function onError() {
//   console.log("Введіть коректні дані");
// }
// function onSuccses(value) {
//   console.log(value);
// }
// calculate(4, 2, onSuccses, onError);
// //!2
// function processArray(arr, funk) {
//   return funk(arr);
// }
// function logElement(arr) {
//   return console.log(arr.join(", "));
// }
// function squareElement(arr) {
//   return console.log(arr.map((elem) => elem ** 2));
// }
// processArray([1, 2, 3, 4], logElement);
// processArray([1, 2, 3, 4], squareElement);
// //!3
// function creaeOrder(orderId) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(`Замовлення принято: ${orderId}`);
//     }, 1000);
//   });
// }
// function processOrder(orderId) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(`Замовлення обробляється: ${orderId}`);
//     }, 2000);
//   });
// }
// function deliverOrder(orderId) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(`Замовлення доставлено: ${orderId}`);
//     }, 3000);
//   });
// }
// const id = 1;
// creaeOrder(id)
//   .then((resolve) => {
//     console.log(resolve);
//     return processOrder(id);
//   })
//   .then((resolve) => {
//     console.log(resolve);
//     return deliverOrder(id);
//   })
//   .then((resolve) => {
//     console.log(resolve);
//   });
//!4
function checkEvenNumber(number) {
  return new Promise((res, rej) => {
    if (number % 2 === 0) {
      res(`Парне число: <number> ${number} </number>`);
    } else {
      rej(`Непарне число: <number> ${number} </number>`);
    }
  });
}
checkEvenNumber(1)
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
