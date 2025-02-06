const products = ["хліб", "молоко", "яблука", "шоколад", "банани"];
let i = 0;
while (i < products.length) {
   console.log(`Додаємо ${products[i]} у кошик.`);
   
    if (products[i] === "шоколад") {
        console.log('Солодке життя забезпечене!');
    }
    i++;
}
console.log('Всі продукти у кошику! Тепер можна йти на касу.')