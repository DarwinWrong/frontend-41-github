class AnimalFestival {
    constructor() {
        this.animals =[]
    }
    addAnimal(animal) {
        this.animals.push(animal)
        this.displayAnimalButton(animal)
    }
    performShow(animalName, callback) {
        for (let index in this.animals) {
            const animal = this.animals[index]
            if (animal.name === animalName) {
                animal.performShow(callback)
                break
            }
        }
    }
    displayAnimalButton(animal) {
        const button = document.createElement('button')
        button.innerText = animal.name
        button.onclick = () => this.performShow(animal.name, result => this.displayShowResult(result))
        document.body.appendChild(button)
    }
    displayShowResult(result) {
        const div = document.createElement('div')
        div.innerText = result
        document.body.appendChild(div)
    }
}

class Animal {
    constructor(name, specialty, energy) {
        this.name = name
        this.specialty = specialty
        this.energy = energy
    }
    performShow(callback) {
        if (this.energy <= 0) {
            callback(`${this.name} is too tired to perform.`);
            return
        }
        this.energy -= 10

        const tricks = ['magic show', 'dance', 'jump through hoop'];
        const trick = tricks[Math.floor(Math.random() * tricks.length)];

        const result = `${this.name} performs a ${trick} as a ${this.specialty}. Remaining energy: ${this.energy}`;
        callback(result);
    }
}
const festival = new AnimalFestival();
const animal1 = new Animal('Leo', 'Lion', 100);
const animal2 = new Animal('Ella', 'Elephant', 80);
const animal3 = new Animal('Zara', 'Zebra', 0);

festival.addAnimal(animal1);
festival.addAnimal(animal2);
festival.addAnimal(animal3);