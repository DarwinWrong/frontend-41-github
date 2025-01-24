
var personName = "Іван";
let personEmail = "ivan@gamele.com";
const personAge = 30;


console.log(personName);
console.log(personEmail);
console.log(personAge);


personName = "Петро";
personEmail = "petro@example.com";




console.log(personName);
console.log(personEmail);



var globVariable = "var Видима глобально";
console.log(globVariable);
{
    globVariable = "var Перезапис глобальної змінної";
    console.log(globVariable);
    var globVariable = "var Перевизначення глобально і в блоці";
    console.log(globVariable);
}
console.log(globVariable);

let blockScopedVariable = "Видима глобально";
console.log(blockScopedVariable);
{
    let blockScopedVariable = "Видима тільки в цьому блоці";
    console.log(blockScopedVariable);
}
console.log(blockScopedVariable);
blockScopedVariable = "Перезапис глобальної змінної";
console.log(blockScopedVariable);

const constVariable = "Видима глобально";
console.log(constVariable);
{
    let constVariable = "Видима тільки в цьому блоці";
    console.log(constVariable);
}
console.log(constVariable);


