alert("Hello Jedi");

let userAnswer = prompt("What is your name?");

let isJedi = confirm("Do you really a Jedi?");

if (isJedi) {
    alert(`We happy to see you ${userAnswer}`);
} else {
    alert('We hate dark side');
}

let personСharacteristics = {
    name: "Jedi",
    HP: "100",
    MP: "120",
    Strength: "20",
    Intellect: "41"
};

console.log(personСharacteristics.Intellect);

let recordsArray = [40, 60, 70, 100, 120];

for (let i = 0; i < recordsArray.length; i++) {
    console.log(recordsArray[i]);
}
