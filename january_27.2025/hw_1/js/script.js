function task1() {
    const productsInput = document.getElementById('productsInput').value;
    const products = productsInput.split(',').map(item => item.trim());
    let output = "";
    let i = 0;

    while (i < products.length) {
        if (products[i].toLowerCase() === "шоколад") {
            output += "Солодке життя забезпечене!<br>";
        } else {
            output += "Додаємо " + products[i] + " у кошик...<br>";
        }
        i++;
    }
    output += "Всі продукти у кошику! Тепер можна йти на касу.<br>";

    document.getElementById('output').innerHTML = output;
}

function task2() {
    const num = parseInt(document.getElementById('numberInput').value);
    let output = "";

    if (isNaN(num)) {
        output = "Будь ласка, введіть дійсне число!";
    } else {
        output = multiplyNumbers(num);
    }

    document.getElementById('output').innerHTML = output;
}

function multiplyNumbers(num) {
    if (num < 1 || num > 100) {
        return "Це фабрика для реальних чисел! Давай щось нормальне 😏<br>";
    }

    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += num + " * " + i + " = " + (num * i) + "<br>";
    }
    return result;
}
