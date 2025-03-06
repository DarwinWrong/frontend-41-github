// 1.1 task
const characters = {
    name: "Шерлок Холмс",
    age: 40,
    profession: "Детектив",
    mysterySolved: 50
};

function displayCharacters(characters) {
        console.log(`Імʼя: ${characters.name}, вік: ${characters.age}`)
    ;
}

displayCharacters(characters)

// 1.2 task

delete characters.mysterySolved;
console.log(characters)

// 1.3 task

function findObject(obj, prop) {
        if (prop in obj) {
          console.log(`${prop} властивість є`);
        } else {
          console.log("Даної властивості немає");
        }
}
findObject(characters, 'age')
findObject(characters, 'mysterySolved')
 
//1.4 task

const newCharacters = Object.create(characters)
newCharacters.country = 'England'
console.log(newCharacters)

//1.5 task 
for (const key in characters) {
    console.log(` ${key} : ${characters[key]}`);
}



