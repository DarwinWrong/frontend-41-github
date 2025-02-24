class Animal {
    constructor(name, specialty, energy) {
        this.name = name;
        this.specialty = specialty;
        this.energy = energy;
    }

    performTrick(callback) {
        if (this.energy > 0) {
            this.energy -= 10;
            updateDisplay();
            setTimeout(() => {
                callback(`${this.name} виконує ${this.specialty}! (Енергія: ${this.energy})`);
            }, 2000);
        } else {
            callback(`${this.name} занадто втомлений, щоб виконати трюк.`);
        }
    }
}

const AnimalFestival = {
    animals: [],

    addAnimal(animal) {
        this.animals.push(animal);
        updateDisplay();
    },

    performShow(animalName, callback) {
        const animal = this.animals.find(a => a.name === animalName);
        if (animal) {
            animal.performTrick(callback);
        }
    }
};

function updateDisplay() {
    const container = document.getElementById("animalsContainer");
    container.innerHTML = "";
    AnimalFestival.animals.forEach(animal => {
        const button = document.createElement("button");
        button.textContent = `${animal.name} (${animal.specialty}) - Енергія: ${animal.energy}`;
        button.onclick = () => {
            AnimalFestival.performShow(animal.name, message => {
                alert(message);
                updateDisplay();
            });
        };
        container.appendChild(button);
    });
}


AnimalFestival.addAnimal(new Animal("Дракоша", "вогняний подих", 100));
AnimalFestival.addAnimal(new Animal("Єдиноріг", "магічний танець", 80));
AnimalFestival.addAnimal(new Animal("Фенікс", "політ через кільце", 90));


document.addEventListener("DOMContentLoaded", updateDisplay);
