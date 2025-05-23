class MyDate extends Date {
  constructor(day, month, year) {
    super(year, month - 1, day);
  }

  showDate() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const day = this.getDate();
    const monthName = months[this.getMonth()];
    const year = this.getFullYear();
    return `${monthName} ${day}, ${year}`;
  }

  isFuture() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const selfDate = new Date(
      this.getFullYear(),
      this.getMonth(),
      this.getDate(),
    );
    return selfDate > today;
  }

  isLeapYear() {
    const y = this.getFullYear();
    return y % 400 === 0 || (y % 4 === 0 && y % 100 !== 0);
  }

  nextDay() {
    const d = new Date(this.getTime());
    d.setDate(d.getDate() + 1);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  }
}

module.exports = MyDate;
