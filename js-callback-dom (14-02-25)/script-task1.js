const ZooManager = {
    animals: [],
    addAnimal: function (animal) {
        this.animals.push(animal);
    },
    showAnimals: function () {
        console.log("Zoo animals:");
        this.animals.forEach(animal => {
            console.log(`${animal.name} (${animal.type}) - Energy: ${animal.energy}`);
        });
    },
    performAction: function (animalName, actionCallback) {
        const animal = this.animals.find(a => a.name === animalName);
        if (animal) {
            animal.action(actionCallback);
        } else {
            console.log(`Animal ${animalName} not found.`);
        }
    }
};

function createAnimal(name, type, energy) {
    return {
        name: name,
        type: type,
        energy: energy,
        action: function (callback) {
            callback.call(this);
        }
    };
}

const actions = [
    function () { console.log(`${this.name} is eating.`); },
    function () { console.log(`${this.name} is sleeping.`); },
    function () { console.log(`${this.name} is walking.`); }
];

ZooManager.addAnimal(createAnimal("Leo", "Lion", 100));
ZooManager.addAnimal(createAnimal("Ella", "Elephant", 80));
ZooManager.addAnimal(createAnimal("Molly", "Monkey", 70));

ZooManager.showAnimals();

const container = document.getElementById("animalButtons");
ZooManager.animals.forEach(animal => {
    const btn = document.createElement("button");
    btn.textContent = animal.name;
    btn.addEventListener("click", () => {
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        ZooManager.performAction(animal.name, randomAction);
    });
    container.appendChild(btn);
});
