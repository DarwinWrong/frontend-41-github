var name = "John Doe";
let email = "johndoe@gmail.com";
const age = 30;

console.log("Initial Values:");
console.log("Name:", name);
console.log("Email:", email);
console.log("Age:", age);

name = "Jane Smith";
email = "janesmith@gmail.com";
// age = 35; // Error: Cannot reassign a \'const\' variable (age).
console.error("Cannot reassign a 'const' variable (age).");

console.log("Updated Values:");
console.log("Name:", name);
console.log("Email:", email);
console.warn("Age remains unchanged:", age);