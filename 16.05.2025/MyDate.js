class MyDate {
    constructor(day, month, year) {
      this.date = new Date(year, month - 1, day)
    }
  
    showDate() {
      const day = this.date.getDate()
      const month = this.date.getMonth()
      const year = this.date.getFullYear()
  
      const months = [
        "січня",
        "лютого",
        "березня",
        "квітня",
        "травня",
        "червня",
        "липня",
        "серпня",
        "вересня",
        "жовтня",
        "листопада",
        "грудня",
      ]
      return `${day} ${months[month]} ${year} року`
    }
  
    isFuture() {
      return this.date.getTime() > new Date().getTime()
    }
  
    isLeapYear() {
      const year = this.date.getFullYear();
      return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
    }
  
    nextDay() {
      const tomorrow = new Date(this.date)
      tomorrow.setDate(this.date.getDate() + 1)
      const d = tomorrow.getDate()
      const m = tomorrow.getMonth() + 1
      const y = tomorrow.getFullYear()
      return `${d}/${m}/${y}`
    }
  }
  module.exports = MyDate
