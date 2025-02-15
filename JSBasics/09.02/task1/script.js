let products = ["хліб", "молоко", "яблука", "шоколад", "банани"];
let index = 0;

while (index < products.length) {
    let product = products[index];
    console.log(`Додаємо ${product} у кошик...`);
    
    if (product === "шоколад") {
        console.log("Солодке життя забезпечене!");
    }
    
    index++;
}

console.log("Всі продукти у кошику! Тепер можна йти на касу.");
