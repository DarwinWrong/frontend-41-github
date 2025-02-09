function task4() {
    let addSalt = confirm("Ви хочете додати сіль?");
    let steps = [
        "1: Візьміть яйця.",
        "2: Розбийте їх у миску.",
        "3: Додайте сіль і перець.",
        "4: Добре збийте.",
        "5: Нагрійте сковорідку.",
        "6: Вилийте яйця на сковорідку.",
        "7: Готуйте до готовності."
    ];
    let output = "";

    for (let i = 0; i < steps.length; i++) {
        if (i === 2 && !addSalt) {
            continue;  
        }
        if (i === 4) {
            let hungry = confirm("Ви вже голодні?");
            if (hungry) {
                output += "Ну, тоді їж сирі яйця 😅<br>";
                break;  
            }
        }
        output += steps[i] + "<br>";
    }

    document.getElementById('output').innerHTML = output;
}

function task5() {
    let name = document.getElementById('nameInput').value;
    let age = parseInt(document.getElementById('ageInput').value);
    let message = greetUser(name, age);
    document.getElementById('output').innerHTML = message;
}

function greetUser(name, age) {
    if (age === 0) {
        return `Ого, ${name}! Ти мабуть не існуєш!`;
    } else if (age < 18) {
        return `Привіт, ${name}! Ти ще молодий і маєш багато часу для навчання JS!`;
    } else if (age >= 18 && age <= 30) {
        let message = `Привіт, ${name}! Час вивчати JS і будувати кар'єру!<br>`;
        while (age > 18 && age < 30) {
            message += `Тобі зараз ${age}. Розвивайся!<br>`;
            age++;
        }
        return message;
    } else {
        return `Привіт, ${name}! Ніколи не пізно почати нове хобі — чому б не JS?`;
    }
}

function task6() {
    let guestsInput = document.getElementById('guestsInput').value;
    let guests = guestsInput.split(',').map(guest => guest.trim());
    partyPlanner(...guests);
}

function partyPlanner(...guests) {
    let output = "";
    if (guests.length === 0 || (guests.length === 1 && guests[0] === "")) {
        output = "Ой, вечірка скасована 😢";
    } else {
        output = `На вечірку запросили ${guests.length} гостей.<br>Ось їхні імена: ${guests.join(", ")}.`;
    }
    document.getElementById('output').innerHTML = output;
}
