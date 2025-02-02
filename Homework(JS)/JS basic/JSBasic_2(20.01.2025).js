var globVariable = "var Видима глобально";
console.log(globVariable);
{
    globVariable = "var Перезапис глобальної змінної";
    console.log(globVariable);
    var globVariable = "var Перевизначення глобально і в блоці";
    console.log(globVariable);
}

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
const Variable = "Перезапис глобальної змінної";
console.log(Variable);
