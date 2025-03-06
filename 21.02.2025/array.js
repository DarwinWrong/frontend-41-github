//2.1 task
const names = ["John", "Sarah", "Michael", "Anna"];

// 2.2 task

function displayNames(arr) {
    console.log(arr[1], arr[3])
}
displayNames(names);

//2.3 task

function showText(text) {
    for (const name of text) {
        console.log(`Персонаж ${name} " бере участь у розслідуванні.`)
    }
}
showText(names)

//2.4 task

const person = {
    name: 'Tom',
    showName() {
        console.log(this.name)
    }
}
person.showName()

//2.5 task

const newPerson = Object.create(person)
newPerson.surname = 'Antonov'
console.log(newPerson);

