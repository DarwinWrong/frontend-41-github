export class Processor {
  constructor(validator, success) {
    this.validator = validator;
    this.success = success;
  }

  attach(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return;

    form.onsubmit = (e) => {
      e.preventDefault();
      form.querySelectorAll('.error-message').forEach(el => el.remove());

      const isValid = this.validator.validate(form);
      if (isValid) {
        this.success(form);
        form.reset();
      }
    };
  }
}