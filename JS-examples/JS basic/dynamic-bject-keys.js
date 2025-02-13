let greetUser = function (name, age, show = false) {
    const ages = {
        [age === 0 && age]: `Oго, ${name}! Ти мабуть не існуєш!`,
        [age < 18 && age]: `Привіт, ${name}! Ти ще молодий і маєш багато часу для навчання JS!`,
        [age > 18 && age]: `Привіт, ${name}! Час вивчати JS і будувати кар’єру!" – тут використайте while(age>18 && age<30)`,
        [age > 30 && age]: `Привіт, ${name}! Ніколи не пізно почати нове хобі — чому б не JS?`
    }

    show && console.log(ages?.[age]);
    return ages?.[age] || "Invalid data";
}
const answer = greetUser('bob', 31, true);


let greetUser = (name, age) => {
    if (age < 0) {
        return "Invalid data";
    } else {
        switch (true) {
            case age === 0:
                return `Oго, ${name}! Ти мабуть не існуєш!` ;
            case age < 18:
                return `Привіт, ${name}! Ти ще молодий і маєш багато часу для навчання JS!` ;
            case age > 18 && age < 30:
                return `"Привіт, ${name}! Час вивчати JS і будувати кар’єру!" – тут використайте while(age>18 && age<30)` ;
            case age > 30:
                return `Привіт, ${name}! Ніколи не пізно почати нове хобі — чому б не JS?` ;
        }
    }
}

console.log(greetUser("Vlad", -1));
console.log(greetUser("Den", 0));
console.log(greetUser("Andriy", 28));
console.log(greetUser("Vova", 43));


function getAnimalName(type) {
    const animalNames = {
        cat: "Tom",
        [type === 'dog' && type]: "Petrovich", // dog: "Petrovich",
        [type === 'rabbit' && type]: "Jerry", // false: "Jerry"
        [type === 'fish' && type]: "Joe",
        [type === 'bird' && type]: "Jack"
    }
    console.log(animalNames)
    return animalNames[type] || "Unknown animal";
}
console.log(getAnimalName('bird'));

function getAnimalName(type) {
    switch (true) {
        case type === 'dog':
            return "Petrovich";
        case type === 'rabbit':
            return "Jerry";
        case type === 'fish':
            return "Joe";
        case type === 'bird':
            return "Jack";
        default:
            return "Unknown animal";
    }
}
console.log(getAnimalName('bird'));