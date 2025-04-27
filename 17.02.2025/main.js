class ProgrammersMeeting {
    constructor() {
        this.programmers = []
    }
    addProgrammer(programmer) {
        this.programmers.push(programmer);
        this.displayProgrammerButton(programmer);
    }
    startTask(programmerName, callback) {
        for (let index in this.programmers) {
            const programmer = this.programmers[index];
            if (programmer.name === programmerName) {
                programmer.performTask(callback);
                break
            }
        }
    }
    displayProgrammerButton(programmer) {
        const button = document.createElement('button')
        button.innerText = programmer.name;
        button.onclick = () => this.startTask(programmer.name, (result) => this.displayTaskResult(result))
        document.body.appendChild(button);
    }
    displayTaskResult(result) {
        const div = document.createElement('div')
        div.innerText = result;
        document.body.appendChild(div);
    }
}

class Programmer {
    constructor(name, specialization) {
        this.name = name;
        this.specialization = specialization;
        this.taskStatus = 'Not started';
    }
    performTask(callback) {
        this.taskStatus = 'In progress';
        setTimeout(() => {
            this.taskStatus = 'Completed'
            const result = 'Task completed by ' + this.name + ' with specialization ' + this.specialization;
            callback(result);
        }, 2000)
    }
}

const meeting = new ProgrammersMeeting();
const programmer1 = new Programmer('Alice', 'Frontend');
const programmer2 = new Programmer('Bob', 'Backend');
const programmer3 = new Programmer('Charlie', 'Fullstack');

meeting.addProgrammer(programmer1);
meeting.addProgrammer(programmer2);
meeting.addProgrammer(programmer3);