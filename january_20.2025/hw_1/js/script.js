var userName = "Олександр";
let userEmail = "alex@example.com";
const userAge = 25;

console.log("Ім'я:", userName);
console.log("Пошта:", userEmail);
console.log("Вік:", userAge);

userName = "Іван";
userEmail = "ivan@example.com";
console.log("Оновлене ім'я:", userName);
console.log("Оновлена пошта:", userEmail);

try {
    userAge = 30;
} catch (error) {
    console.error("Помилка: змінна const не може бути змінена!");
}

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

try {
    constVariable = "Перезапис глобальної змінної";
} catch (error) {
    console.error("Помилка: неможливо змінити значення const!");
}
