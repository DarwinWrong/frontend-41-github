class Rule {
  constructor(name, errorText, validateFn) {
    this.name = name;
    this.errorText = errorText;
    this.validateFn = validateFn;
  }
  isValid(form) {
    const value = form.find(`[name=${this.name}]`).val();
    return this.validateFn(value);
  }
}

class ConsoleLogger {
  log(text) {
    console.error(text);
  }
}

class AlertLogger {
  log(text) {
    alert(text);
  }
}

class DomLogger {
  constructor(container) {
    this.container = $(container);
  }
  log(text) {
    const p = $('<p>').addClass('error').text(text);
    this.container.append(p);
  }
}

class Validator {
  constructor(rules, logger) {
    this.rules = rules;
    this.logger = logger;
  }
  validate(form) {
    let valid = true;
    this.logger.container && this.logger.container.empty();
    for (const rule of this.rules) {
      if (!rule.isValid(form)) {
        valid = false;
        this.logger.log(`${rule.name}: ${rule.errorText}`);
      }
    }
    return valid;
  }
}

class Processor {
  constructor(validator, success) {
    this.validator = validator;
    this.success = success;
  }
  attach(formSelector) {
    const form = $(formSelector);
    form.on('submit', (e) => {
      e.preventDefault();
      if (this.validator.validate(form)) {
        this.success(form);
      }
    });
  }
}

const currentYear = new Date().getFullYear();
const rules = [
  new Rule('username', 'Length must be 5–15 letters only', (v) =>
    /^[A-Za-z]{5,15}$/.test(v),
  ),
  new Rule(
    'year',
    `Must be between 1900 and ${currentYear}`,
    (v) => +v >= 1900 && +v <= currentYear,
  ),
  new Rule('eyeColor', 'Must select eye color', (v) =>
    ['brown', 'green', 'gray', 'blue'].includes(v),
  ),
  new Rule('hairColor', 'Must select hair color', (v) =>
    ['black', 'brown', 'white', 'red', 'other'].includes(v),
  ),
  new Rule('height', 'Must be between 0 and 2.60', (v) => +v >= 0 && +v <= 2.6),
  new Rule('weight', 'Must be between 0 and 300', (v) => +v >= 0 && +v <= 300),
];

const logger = new DomLogger('#result');
const validator = new Validator(rules, logger);
const processor = new Processor(validator, (form) => {
  const data = form
    .serializeArray()
    .reduce((o, { name, value }) => ((o[name] = value), o), {});
  $('#result')
    .empty()
    .append($('<pre>').text(JSON.stringify(data, null, 2)));
  form[0].reset();
});

processor.attach('#personForm');
