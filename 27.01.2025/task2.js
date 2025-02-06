function multiplyNumbers(num) {
    if (num < 1 || num > 100) {
        console.log('Це фабрика для реальних чисел! Давай щось нормальне 😏');
        return;
    }
    for (let i = 1; i <= 10; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}
multiplyNumbers(5);
multiplyNumbers(101);
multiplyNumbers(-3);