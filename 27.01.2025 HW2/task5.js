function greetUser(name, age) {
    switch (true) {
        case age > 0 && age < 18: {
            return `Привіт, ${name}! Ти ще молодий і маєш багато часу для навчання JS!`;
        }
        case age == 0: {
            return `Ого, ${name}! Ти мабуть не існуєш!`;
        }
        case age >= 18 && age <= 30: {
            return `Привіт, ${name}! Час вивчати JS і будувати кар’єру!`;
        }    
        case age > 30: {
            return `Привіт, ${name}! Ніколи не пізно почати нове хобі — чому б не JS?`;
        }
        default: break;
    }
}
console.log(greetUser("Олександр", 0)); 
console.log(greetUser("Ірина", 17)); 
console.log(greetUser("Микола", 35));