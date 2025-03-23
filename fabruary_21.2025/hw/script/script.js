const output = document.getElementById("output");

function log(text) {
  console.log(text);
  output.innerText += text + "\n";
}

let character = {
  name: "Олександр",
  age: 35,
  profession: "детектив",
  mysterySolved: true
};

log(`Ім'я: ${character.name}, Вік: ${character.age}`);

delete character.mysterySolved;
log("Властивість mysterySolved видалено: " + !("mysterySolved" in character));

function hasProperty(obj, prop) {
  return obj.hasOwnProperty(prop);
}
log("Чи є властивість age? " + hasProperty(character, "age"));

let apprentice = Object.create(character);
apprentice.name = "Іван";
apprentice.experience = "новачок";
log(`Учень: ${apprentice.name}, професія: ${apprentice.profession}, досвід: ${apprentice.experience}`);

function printProperties(obj) {
  for (let key in obj) {
    log(`${key}: ${obj[key]}`);
  }
}
log("Властивості учня:");
printProperties(apprentice);

let characters = ["John", "Sarah", "Michael", "Anna"];
log("2-ге ім’я: " + characters[1]);
log("4-те ім’я: " + characters[3]);

for (let name of characters) {
  log(`Персонаж ${name} бере участь у розслідуванні.`);
}

let detective = {
  name: "Марія",
  sayName: function () {
    log("Це персонаж: " + this.name);
  }
};
detective.sayName();

let baseCharacter = {
  role: "свідок",
  describe: function () {
    log(`Роль: ${this.role}, Ім'я: ${this.name}`);
  }
};

let witness = Object.create(baseCharacter);
witness.name = "Катерина";
witness.role = "жертва";
witness.describe();
