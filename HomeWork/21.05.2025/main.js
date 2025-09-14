class Rule {
  constructor(name, errorText, check) {
    this.name = name;
    this.errorText = errorText;
    this.check = check;
  }

  isValid(value) {
    return this.check(value);
  }
}

// class ConsoleLogge{
//     log(errorText)
// }
