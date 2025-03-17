const ProgrammersMeeting = {
    programmers: [],
    addProgrammer(programmer) {
        this.programmers.push(programmer);
    },
    startTask(programmerName, callback) {
        const programmer = this.programmers.find(p => p.name === programmerName);
        if (programmer) {
            programmer.performTask(callback);
        }
    }
};

function Programmer(name, specialization) {
    this.name = name;
    this.specialization = specialization;
    this.taskStatus = 'Not started';

    this.performTask = function (callback) {
        this.taskStatus = 'In progress';
        callback(this);
    };
}

const programmers = [
    new Programmer('Alice', 'Frontend Developer'),
    new Programmer('Bob', 'Backend Developer'),
    new Programmer('Charlie', 'Fullstack Developer')
];

programmers.forEach(programmer => ProgrammersMeeting.addProgrammer(programmer));

const programmersContainer = document.getElementById('programmers-container');
const taskResultDiv = document.getElementById('task-result');

function renderProgrammers() {
    ProgrammersMeeting.programmers.forEach(programmer => {
        const button = document.createElement('button');
        button.innerText = programmer.name;
        button.className = 'programmer';
        button.onclick = function () {
            ProgrammersMeeting.startTask(programmer.name, (prog) => {
                prog.taskStatus = 'Task completed by ' + prog.specialization;
                taskResultDiv.innerText = `${prog.name} (${prog.specialization}) has completed the task!`;
            });
        };
        programmersContainer.appendChild(button);
    });
}

renderProgrammers();


const AnimalFestival = {
    animals: [],
    addAnimal(animal) {
        this.animals.push(animal);
    },
    performShow(animalName, callback) {
        const animal = this.animals.find(a => a.name === animalName);
        if (animal && animal.energy > 0) {
            animal.performTrick(callback);
        } else {
            callback(`${animal.name} is too tired to perform.`);
        }
    }
};

function Animal(name, specialty, energy) {
    this.name = name;
    this.specialty = specialty;
    this.energy = energy;

    this.performTrick = function (callback) {
        this.energy -= 10;
        callback(`${this.name} performs a ${this.specialty} trick! Energy left: ${this.energy}`);
    };
}

const animals = [
    new Animal('Draco', 'Fire-breathing', 100),
    new Animal('Leo', 'Lion Roar', 80),
    new Animal('Bunny', 'High Jump', 60)
];

animals.forEach(animal => AnimalFestival.addAnimal(animal));

const animalsContainer = document.getElementById('animals-container');
const trickResultDiv = document.getElementById('trick-result');

function renderAnimals() {
    AnimalFestival.animals.forEach(animal => {
        const button = document.createElement('button');
        button.innerText = animal.name;
        button.className = 'animal';
        button.onclick = function () {
            AnimalFestival.performShow(animal.name, (result) => {
                trickResultDiv.innerText = result;
            });
        };
        animalsContainer.appendChild(button);
    });
}

renderAnimals();
