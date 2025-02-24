class Programmer {
    constructor(name, specialization) {
        this.name = name;
        this.specialization = specialization;
        this.taskStatus = "Idle";
    }

    performTask(callback) {
        this.taskStatus = "Working...";
        setTimeout(() => {
            this.taskStatus = `Completed a ${this.specialization} task!`;
            callback(this.name, this.taskStatus);
        }, Math.random() * 2000 + 1000);
    }
}

class ProgrammersMeeting {
    constructor() {
        this.programmers = [];
    }

    addProgrammer(programmer) {
        this.programmers.push(programmer);
    }

    startTask(programmerName, callback) {
        const programmer = this.programmers.find(p => p.name === programmerName);
        if (programmer) {
            programmer.performTask(callback);
        }
    }
}

const meeting = new ProgrammersMeeting();
meeting.addProgrammer(new Programmer("Jane", "Frontend Development"));
meeting.addProgrammer(new Programmer("John", "Backend Development"));
meeting.addProgrammer(new Programmer("Dave", "DevOps"));

const container = document.getElementById("programmers-container");
const resultDiv = document.getElementById("task-result");

meeting.programmers.forEach(programmer => {
    const button = document.createElement("button");
    button.textContent = `${programmer.name} (${programmer.specialization})`;

    button.addEventListener("click", () => {
        resultDiv.textContent = `${programmer.name} is working on the task...`;
        meeting.startTask(programmer.name, (name, status) => {
            resultDiv.textContent = `${name}: ${status}`;
        });
    });

    container.appendChild(button);
});
