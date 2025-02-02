// const steps = [
//     "Візьміть яйця.",
//     "Розбийте їх у миску.",
//     "Додайте сіль і перець.",
//     "Добре збийте.",
//     "Нагрійте сковорідку.",
//     "Вилийте яйця на сковорідку.",
//     "Готуйте до готовності."
// ];
//
// let addSalt = confirm("Бажаєте додати сіль?");
// for (let i = 0; i < steps.length; i++) {
//     if (i === 2 && !addSalt) {
//         continue;
//     }
//
//     if (i === 4) {
//         let hungry = prompt("Ви вже голодні? (Так/Ні)").toLowerCase();
//         if (hungry === "так") {
//             alert("Ну, тоді їж сирі яйця 😅");
//             break;
//         }
//     }
//
//     alert(`${i + 1}: ${steps[i]}`);
// }

//
// let greetUser = (name, age) => {
//     if (age < 0) {
//         return "Invalid data";
//     } else {
//         switch (true) {
//             case age === 0:
//                 return `Oго, ${name}! Ти мабуть не існуєш!` ;
//             case age < 18:
//                 return `Привіт, ${name}! Ти ще молодий і маєш багато часу для навчання JS!` ;
//             case age > 18 && age < 30:
//                 return `"Привіт, ${name}! Час вивчати JS і будувати кар’єру!" – тут використайте while(age>18 && age<30)` ;
//             case age > 30:
//                 return `Привіт, ${name}! Ніколи не пізно почати нове хобі — чому б не JS?` ;
//         }
//     }
// }
//
// console.log(greetUser("Vlad", -1));
// console.log(greetUser("Den", 0));
// console.log(greetUser("Andriy", 28));
// console.log(greetUser("Vova", 43));

function partyPlanner() {
    if (arguments.length === 0) {
        console.log("Ой, вечірка скасована 😢");
    } else {
        console.log(`На вечірку запросили ${arguments.length} гостей.`);
        console.log(`Ось їхні імена: ${Array.from(arguments).join(", ")}.`);
    }
}

partyPlanner("Оля", "Макс", "Іван");

partyPlanner();

partyPlanner("Анна", "Дмитро");

