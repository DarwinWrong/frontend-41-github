const age = prompt("Введіть ваш вік:");
if (age >= 0 && age <= 12) {
    console.log("Ви дитина.");
} else if (age >= 12 && age <= 18) {
    console.log("Ви підліток.");
} else if (age >= 18 && age <= 60) {
    console.log("Ви дорослий.");
} else if (age >= 60) {
    console.log("Ви пенсіонер.");
} else {
    console.log("Некоректно введений вік.");
}