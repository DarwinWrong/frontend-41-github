class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

class Ebook extends Book {
    constructor(title, author, year, fileSize) {
        super(title, author, year);
        this.fileSize = fileSize;
    }
    getSummary() {
        return `${super.getSummary()}, File Size: ${this.fileSize}`;
    }
}

const library = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new Ebook("Digital Fortress", "Dan Brown", 1998, "1.5MB"),
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Ebook("The Hobbit", "J.R.R. Tolkien", 1937, "2.2MB"),
];

library.forEach(book => console.log(book.getSummary()))
