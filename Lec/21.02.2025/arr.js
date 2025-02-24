var arr = new Array();
arr[0] = 1;
arr[1] = 2;
console.log(arr);
delete arr[1];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "undefined") {
    arr[i] = i + 1;
  }
}
console.log(arr);
const arr1 = [
  [1, 2, 3],
  [4, 6, 2],
];
console.log(arr1[1][1]);
const user = {};
const arr2 = "Вася 14 Перемоги";
function creatObj(obj, arr) {
  const arrUser = arr.split(" ");
  obj.name = arrUser[0];
  obj.age = arrUser[1];
  obj.street = arrUser[2];
  console.log(obj);
}
creatObj(user, arr2);
