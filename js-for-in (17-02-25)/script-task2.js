class Animal {
    constructor(name, specialty, energy) {
        this.name = name;
        this.specialty = specialty;
        this.energy = energy;
    }

    performTrick(callback) {
        const energyCost = Math.floor(Math.random() * 10) + 5;
        if (this.energy < energyCost) {
            callback(`${this.name} doesn't have enough energy to perform a ${this.specialty} trick.`);
        } else {
            this.energy -= energyCost;
            setTimeout(() => {
                callback(`${this.name} performs a ${this.specialty} trick and now has ${this.energy} energy left!`);
            }, Math.random() * 2000 + 1000);
        }
    }
}

class AnimalFestival {
    constructor() {
        this.animals = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    performShow(animalName, callback) {
        const animal = this.animals.find(a => a.name === animalName);
        if (animal) {
            animal.performTrick(callback);
        }
    }
}

const festival = new AnimalFestival();

festival.addAnimal(new Animal("Sparkle", "flying", 100));
festival.addAnimal(new Animal("Whiskers", "dancing", 80));
festival.addAnimal(new Animal("Lucky", "jumping through hoops", 90));

const container = document.getElementById("animals-container");
const resultDiv = document.getElementById("performance-result");

festival.animals.forEach(animal => {
    const btn = document.createElement("button");
    btn.textContent = `${animal.name} - ${animal.specialty}`;

    btn.addEventListener("click", () => {
        resultDiv.textContent = `${animal.name} is preparing to perform...`;
        festival.performShow(animal.name, message => {
            resultDiv.textContent = message;
        });
    });

    container.appendChild(btn);
});
