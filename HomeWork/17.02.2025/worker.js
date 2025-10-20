const ProgrammersMeeting = {
  programmers: [],

  addProgrammer(programmer) {
    this.programmers.push(programmer);
    console.log(`Додано програміста: ${programmer.name}`);
  },

  startTask(programmerName, callback) {
    const programmer = this.programmers.find((p) => p.name === programmerName);

    if (programmer) {
      programmer.performTask(callback);
    } else {
      callback(`ПОМИЛКА: Програміст ${programmerName} не зареєстрований.`);
    }
  },
};

function createProgrammer(name, specialization) {
  return {
    name: name,
    specialization: specialization,
    taskStatus: "idle",

    performTask(callback) {
      console.log(`${this.name} починає завдання...`);
      this.taskStatus = "working";

      setTimeout(() => {
        this.taskStatus = "idle";
        const result = `✅ [${this.specialization}] ${this.name} завершив(ла) завдання: "Оптимізовано базу даних".`;

        callback(result);
      }, Math.random() * 2000 + 1000);
    },
  };
}

const progContainer = document.getElementById("programmers-container");
const progResults = document.getElementById("programmers-results");

function displayProgrammerResult(message) {
  const p = document.createElement("p");
  p.textContent = message;
  progResults.prepend(p);
}

ProgrammersMeeting.addProgrammer(createProgrammer("Аліса", "Frontend"));
ProgrammersMeeting.addProgrammer(createProgrammer("Боб", "Backend"));
ProgrammersMeeting.addProgrammer(createProgrammer("Чарлі", "DevOps"));

ProgrammersMeeting.programmers.forEach((programmer) => {
  const btn = document.createElement("button");
  btn.textContent = `Дати завдання ${programmer.name} (${programmer.specialization})`;

  btn.onclick = () => {
    displayProgrammerResult(`⏳ ${programmer.name} отримує нове завдання...`);
    ProgrammersMeeting.startTask(programmer.name, displayProgrammerResult);
  };
  progContainer.appendChild(btn);
});
