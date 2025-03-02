const zooManager = {
    animals: [],
    addAnimal: function (animals) {
        this.animals.push(animals);
    },
    showAnimals: function () {
        console.log(this.animals);
    },
    performAction: function (animalName, actionCallback) {
        const animal = this.animals.find(animal => animal.name === animalName);
        if (animal) {
            actionCallback(animal);
        }else {
            console.log('Такої тварини немає');
        }
    }
}
const monkey = {
    name: 'Мавпа',
    type: 'Примат',
    energy: 100,
    action(callback) {
        callback.call(this);
    },
};
const elephant = {
    name: 'Слон',
    type: 'Хоботна тварина',
    energy: 100,
    action(callback) {
        callback.call(this);
    },
};

zooManager.addAnimal(elephant);
zooManager.addAnimal(monkey);
zooManager.showAnimals();

const eat = (animal) => console.log(`${animal.name} їсть`);
const sleep = (animal) =>  console.log(`${animal.name} спить`);
const walk = (animal) => console.log(`${animal.name} гуляє`);

zooManager.animals.forEach(animal => {
    const container = document.getElementById('container');
    const btn = document.createElement('button');
    btn.textContent = animal.name;
    btn.addEventListener('click', () => {
        const actions = [eat, sleep, walk];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        zooManager.performAction(animal.name, randomAction);
    });
    container.appendChild(btn);
});
