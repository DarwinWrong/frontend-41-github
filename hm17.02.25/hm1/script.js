class Programmer {
    constructor(name, specialization) {
        this.name = name;
        this.specialization = specialization;
        this.taskStatus = "Очікує завдання";
    }

    performTask(callback) {
        this.taskStatus = "Виконується...";
        updateDisplay();
        setTimeout(() => {
            this.taskStatus = `Завдання виконано! (${this.specialization})`;
            callback(this);
        }, 2000);
    }
}

const ProgrammersMeeting = {
    programmers: [],

    addProgrammer(programmer) {
        this.programmers.push(programmer);
        updateDisplay();
    },

    startTask(programmerName, callback) {
        const programmer = this.programmers.find(p => p.name === programmerName);
        if (programmer) {
            programmer.performTask(callback);
        }
    }
};

function updateDisplay() {
    const container = document.getElementById("programmersContainer");
    container.innerHTML = "";
    ProgrammersMeeting.programmers.forEach(programmer => {
        const button = document.createElement("button");
        button.textContent = `${programmer.name} (${programmer.specialization}) - ${programmer.taskStatus}`;
        button.onclick = () => {
            ProgrammersMeeting.startTask(programmer.name, updateDisplay);
        };
        container.appendChild(button);
    });
}


ProgrammersMeeting.addProgrammer(new Programmer("Олексій", "Front-end"));
ProgrammersMeeting.addProgrammer(new Programmer("Марія", "Back-end"));
ProgrammersMeeting.addProgrammer(new Programmer("Ігор", "DevOps"));


document.addEventListener("DOMContentLoaded", updateDisplay);
