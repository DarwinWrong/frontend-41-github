function multiplyNumbers(num) {
    if (num < 1 || num > 100) {
        console.log("Введіть нормальне число");
        return;
    }
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} × ${i} = ${num * i}`);
    }
}

multiplyNumbers(5);
multiplyNumbers(101);
multiplyNumbers(-3);
