class MyDate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    showDate() {
        const months = [
            'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
            'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
        ];
        return `${this.day} ${months[this.month - 1]} ${this.year} року`;
    }

    isFuture() {
        const currentDate = new Date(this.year, this.month - 1, this.day);
        return currentDate > new Date();
    }

    isLeapYear() {
        return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    }

    nextDay() {
        const date = new Date(this.year, this.month - 1, this.day);
        date.setDate(date.getDate() + 1);
        const d = date.getDate();
        const m = date.getMonth() + 1;
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    }
}

module.exports = MyDate;


