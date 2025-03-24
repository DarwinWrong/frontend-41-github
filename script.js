var arr = [1, 2, 3, 4, 5];
var found = arr.find(function (number) {
  return number % 2 !== 0;
});
console.log('find > found:', found);
