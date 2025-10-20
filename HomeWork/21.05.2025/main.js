class Rule {
  constructor(name, errorText, validate) {
    this.name = name;
    this.errorText = errorText;
    this.validate = validate;
  }
  isValid(value) {
    return this.validate(value);
  }
}

class Logger {
  constructor(errorText) {
    this.errorText = errorText;
  }
  log(errorText) {
    throw new Error("Метод log має бути реалізований");
  }
}

class ConsoleLogger extends Logger {
  log(errorText) {
    console.log("Помилка:" + errorText);
  }
}

class AlertLogger extends Logger {
  log(errorText) {
    alert("Помилка:" + errorText);
  }
}

class DomLogger extends Logger {
  constructor(containerId = "errors") {
    super();
    this.container = document.getElementById(containerId);
  }
  log(errorText) {
    const p = document.createElement("p");
    p.textContent = errorText;
    this.container.appendChild(p);
  }
  clear() {
    this.container.innerHTML = "";
  }
}

class Validator {
  constructor(logger, rules) {
    this.logger = logger;
    this.rules = rules;
  }
  validate(form) {
    if (this.logger instanceof DomLogger) {
      this.logger.clear();
    }
    let isValid = true;
    for (const rule of this.rules) {
      const value = form[rule.name].value;
      if (!rule.isValid(value)) {
        this.logger.log(`Поле "${rule.name}": ${rule.errorText}`);
        isValid = false;
      }
    }
    return isValid;
  }
}

class Processor {
  constructor(validator, success) {
    this.validator = validator;
    this.success = success;
  }

  attach(formSelector) {
    const form = document.querySelector(formSelector);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.validator.validate(form)) {
        this.success(form);
      }
    });
  }
}

const rules = [
  new Rule("username", "Має бути від 5 до 15 літер", (value) =>
    /^[a-zA-Z]{5,15}$/.test(value)
  ),
  new Rule("birthyear", "Рік від 1900 до поточного", (value) => {
    const year = Number(value);
    const currentYear = new Date().getFullYear();
    return year >= 1900 && year <= currentYear;
  }),
  new Rule("eyeColor", "Оберіть колір очей", (value) =>
    ["brown", "green", "gray", "blue"].includes(value)
  ),
  new Rule("hairColor", "Оберіть колір волосся", (value) =>
    ["black", "brown", "white", "red", "other"].includes(value)
  ),
  new Rule("height", "Зріст від 0 до 2.6 м", (value) => {
    const h = parseFloat(value);
    return h > 0 && h <= 2.6;
  }),
  new Rule("weight", "Вага від 0 до 300 кг", (value) => {
    const w = parseFloat(value);
    return w > 0 && w <= 300;
  }),
];

function success(form) {
  const result = document.getElementById("result");
  result.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = "Дані форми:";
  result.appendChild(heading);
  const list = document.createElement("ul");

  for (let i = 0; i < form.elements.length; i++) {
    const el = form.elements[i];
    if (el.name && el.type !== "submit") {
      const listItem = document.createElement("li");
      listItem.textContent = el.name + ": " + el.value;
      list.appendChild(listItem);
    }
  }
  result.appendChild(list);
  form.reset();
}

const logger = new DomLogger();
const validator = new Validator(logger, rules);
const processor = new Processor(validator, success);
processor.attach("form");
