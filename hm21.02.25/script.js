class Detective {
    constructor(name, age, profession, mysterySolved) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.mysterySolved = mysterySolved;
    }

    displayInfo() {
        console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    }
}

const detective = new Detective("Шерлок Холмс", 40, "Детектив", true);
detective.displayInfo();

delete detective.mysterySolved;
console.log("mysterySolved" in detective);

function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}
console.log(hasProperty(detective, "age"));

const newDetective = Object.create(detective);
newDetective.case = "Справa про зниклий артефакт";
console.log(newDetective);

function displayAllProperties(obj) {
    for (let key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
displayAllProperties(detective);

const suspects = ["John", "Sarah", "Michael", "Anna"];
function displayNames(arr) {
    console.log(`Друге ім'я: ${arr[1]}, Четверте ім'я: ${arr[3]}`);
}
displayNames(suspects);

for (let name of suspects) {
    console.log(`Персонаж ${name} бере участь у розслідуванні.`);
}

const detectiveObject = {
    name: "Еркюль Пуаро",
    getInfo() {
        console.log(`Детектив: ${this.name}`);
    }
};
detectiveObject.getInfo();

const baseObject = { role: "Слідчий" };
const inheritingObject = Object.create(baseObject);
inheritingObject.name = "Джеймс Бонд";
console.log(inheritingObject.name, inheritingObject.role);