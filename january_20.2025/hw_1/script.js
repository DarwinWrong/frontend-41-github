var userName = "Ivan";
let userEmail = "ivan@example.com";
const userAge = 30;

console.log(userName);
console.log(userEmail);
console.log(userAge);

userName = "Petro";
userEmail = "petro@example.com";
console.warn("Cannot change the value of a const variable userAge");

console.log(userName);
console.log(userEmail);

var globVariable = "var Visible globally";
console.log(globVariable);

{
    globVariable = "var Overwriting global variable";
    console.log(globVariable);
    var globVariable = "var Redefinition globally and in block";
    console.log(globVariable);
}

console.log(globVariable);

let blockScopedVariable = "Visible globally";
console.log(blockScopedVariable);

{
    let blockScopedVariable = "Visible only in this block";
    console.log(blockScopedVariable);
}

console.log(blockScopedVariable);
blockScopedVariable = "Overwriting global variable";
console.log(blockScopedVariable);

const constVariable = "Visible globally";
console.log(constVariable);

{
    let constVariable = "Visible only in this block";
    console.log(constVariable);
}

console.log(constVariable);

console.error("Error: Cannot change the value of a const variable constVariable");
