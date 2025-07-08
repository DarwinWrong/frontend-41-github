export class Rule {
  constructor(name, errorText, isValidFn) {
    this.name = name;
    this.errorText = errorText;
    this.isValid = isValidFn;
  }
}