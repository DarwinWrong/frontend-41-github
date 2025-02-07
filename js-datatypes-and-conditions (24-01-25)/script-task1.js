const age = parseInt(prompt("Enter your age:"), 10);

if (age >= 0 && age <= 12) {
  console.log("You are a child.");
} else if (age > 12 && age <= 18) {
  console.log("You are a teenager.");
} else if (age > 18 && age <= 60) {
  console.log("You are an adult.");
} else if (age > 60) {
  console.log("You are a pensioner.");
} else {
  console.error("Invalid age entered.");
}

const numberKey = parseInt(prompt("Enter a number from 0 to 9:"), 10);

switch (numberKey) {
  case 0: console.log("0 -> )"); break;
  case 1: console.log("1 -> !"); break;
  case 2: console.log("2 -> @"); break;
  case 3: console.log("3 -> #"); break;
  case 4: console.log("4 -> $"); break;
  case 5: console.log("5 -> %"); break;
  case 6: console.log("6 -> ^"); break;
  case 7: console.log("7 -> &"); break;
  case 8: console.log("8 -> *"); break;
  case 9: console.log("9 -> ("); break;
  default: console.error("Invalid number entered.");
}

const threeDigitNumber = prompt("Enter a three-digit number:");

if (threeDigitNumber.length === 3) {
  const [digit1, digit2, digit3] = threeDigitNumber;
  const isSame = digit1 === digit2 && digit2 === digit3;
  console.log(`The number ${threeDigitNumber} contains all identical digits:`, isSame);
} else {
  console.error("Please enter a valid three-digit number.");
}

const year = parseInt(prompt("Enter a year:"), 10);

const isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
console.log(`The year ${year} is a leap year:`, isLeapYear);

const fiveDigitNumber = prompt("Enter a five-digit number:");

if (fiveDigitNumber.length === 5) {
  const isPalindrome = fiveDigitNumber === fiveDigitNumber.split("").reverse().join("");
  console.log(`The number ${fiveDigitNumber} is a palindrome:`, isPalindrome);
} else {
  console.error("Please enter a valid five-digit number.");
}