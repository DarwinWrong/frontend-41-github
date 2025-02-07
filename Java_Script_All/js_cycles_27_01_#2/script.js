// Завдання 4: "Циклічна кухня"
function makeOmelet() {
    let steps = [
        "Візьміть яйця",
        "Розбийте їх у миску",
        "Додайте сіль і перець",
        "Добре збийте",
        "Нагрійте сковорідку",
        "Вилийте яйця на сковорідку",
        "Готуйте до готовності"
    ];
    
    for (let i = 0; i < steps.length; i++) {
        if (i === 2) { 
            let addSalt = confirm("Бажаєте додати сіль?");
            if (!addSalt) continue;
        }
        
        console.log(`${i + 1}: ${steps[i]}`);
        
        if (i === 4) { 
            let hungry = prompt("Ви вже голодні? (так/ні)");
            if (hungry.toLowerCase() === "так") {
                console.log("Ну, тоді їж сирі яйця ");
                break;
            }
        }
    }
}

// Завдання 5: "Функція-привітання"
function greetUser(name, age) {
    if (age === 0) {
        return `Ого, ${name}! Ти мабуть не існуєш!`;
    }
    if (age < 18) {
        return `Привіт, ${name}! Ти ще молодий і маєш багато часу для навчання JS!`;
    }
    while (age > 18 && age < 30) {
        return `Привіт, ${name}! Час вивчати JS і будувати кар’єру!`;
    }
    if (age >= 30) {
        return `Привіт, ${name}! Ніколи не пізно почати нове хобі — чому б не JS?`;
    }
}

console.log(greetUser("Андрій", 16));
console.log(greetUser("Марія", 25));
console.log(greetUser("Олексій", 35));

// Завдання 6: "Аргументи на вечірці"
function partyPlanner(...guests) {
    if (guests.length === 0) {
        console.log("Ой, вечірка скасована ");
    } else {
        console.log(`На вечірку запросили ${guests.length} гостей.`);
        console.log(`Ось їхні імена: ${guests.join(", ")}.`);
    }
}

partyPlanner("Анна", "Богдан", "Василь");
partyPlanner();
