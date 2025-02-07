function multiplyNumbers(num) {
    if (num < 1 || num > 100) {
        console.log("This is a factory for real numbers! Let's do something normal 😏");
    } else {
        for (let i = 1; i <= 10; i++) {
            console.log(`${num} x ${i} = ${num * i}`);
        }
    }
}

console.log("Multiplication Table for 5:");
multiplyNumbers(5);

console.log("Multiplication Table for 101:");
multiplyNumbers(101);

console.log("Multiplication Table for -3:");
multiplyNumbers(-3);
