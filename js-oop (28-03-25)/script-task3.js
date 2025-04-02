function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function findCommonElements(...arrays) {
  if (arrays.length === 0) return [];

  const firstArray = arrays[0];

  return firstArray.filter((item) => {
    return arrays.slice(1).every((arr) => arr.includes(item));
  });
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const arr3 = [5, 6, 7, 8, 9];
const arr4 = [7, 8, 9, 10, 11];

const combinedArray = [...arr1, ...arr2, ...arr3, ...arr4].sort(
  (a, b) => b - a,
);
console.log('Combined array (descending):', combinedArray);

const uniqueElements = [...new Set(combinedArray)];
console.log('Unique elements:', uniqueElements);

const commonElements = findCommonElements(arr1, arr2, arr3, arr4);
console.log('Common elements:', commonElements);

const allNumbers = [...new Set([...arr1, ...arr2, ...arr3, ...arr4])];
const primeNumbers = allNumbers.filter(isPrime);
console.log('Prime numbers:', primeNumbers);
