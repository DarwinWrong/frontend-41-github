export class Validator {
  constructor(logger, rules = []) {
    this.logger = logger;
    this.rules = rules;
  }

  validate(form) {
    let isFormValid = true;
    this.rules.forEach(rule => {
      const element = form.elements[rule.name];
      if (element && !rule.isValid(element.value)) {
        this.logger.log(rule.errorText);
        isFormValid = false;
      }
    });
    return isFormValid;
  }
}