const AnimalFestival = {
  animals: [],

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`На фестиваль прибув(ла): ${animal.name}`);
  },

  performShow(animalName, callback) {
    const animal = this.animals.find((a) => a.name === animalName);

    if (animal) {
      animal.performTrick(callback);
    } else {
      callback(`ПОМИЛКА: ${animalName} не знайдено(а) у списку учасників.`);
    }
  },
};

function createAnimal(name, specialty, energy, trick) {
  return {
    name: name,
    specialty: specialty,
    energy: energy,
    trick: trick,

    performTrick(callback) {
      console.log(`${this.name} готується до трюку...`);

      if (this.energy < 15) {
        const result = `😴 ${this.name} (${this.specialty}) занадто втомився(лася) і відмовляється виступати. (Енергія: ${this.energy})`;
        callback(result);
        return;
      }

      setTimeout(() => {
        this.energy -= 15;
        const result = `🎉 ${this.name} (${this.specialty}) ${this.trick}! (Залишок енергії: ${this.energy})`;

        callback(result);
      }, Math.random() * 1500 + 500);
    },
  };
}

const animalContainer = document.getElementById("animals-container");
const animalResults = document.getElementById("animals-results");

function displayAnimalResult(message) {
  const p = document.createElement("p");
  p.textContent = message;
  animalResults.prepend(p);
}

AnimalFestival.addAnimal(
  createAnimal("Іскорка", "Дракон", 50, "видихнув(ла) вогняне кільце")
);
AnimalFestival.addAnimal(
  createAnimal("Пухнастик", "Грифон", 40, "виконав(ла) сальто у повітрі")
);
AnimalFestival.addAnimal(
  createAnimal(
    "Місяць",
    "Єдиноріг",
    60,
    "засвітив(ла) свій ріг кольорами веселки"
  )
);

AnimalFestival.animals.forEach((animal) => {
  const btn = document.createElement("button");
  btn.textContent = `Подивитися трюк: ${animal.name}`;

  btn.onclick = () => {
    displayAnimalResult(
      `🎪 ${animal.name} (${animal.specialty}) виходить на арену...`
    );

    // Викликаємо performShow і передаємо функцію displayAnimalResult як колбек
    AnimalFestival.performShow(animal.name, displayAnimalResult);
  };
  animalContainer.appendChild(btn);
});
