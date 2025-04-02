const Book = {
    init(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    },
    getSummary() {
        return `${this.title} by ${this.author}, ${this.year}`;
    }
};

const Ebook = Object.create(Book);
Ebook.init = function(title, author, year, fileSize) {
    Book.init.call(this, title, author, year);
    this.fileSize = fileSize;
};
Ebook.getSummary = function() {
    return `${Book.getSummary.call(this)}, File Size: ${this.fileSize}MB`;
};

const books = [
    Object.create(Book),
    Object.create(Ebook)
];
books[0].init("1984", "George Orwell", 1949);
books[1].init("Digital Fortress", "Dan Brown", 1998, 2);

books.forEach(book => console.log(book.getSummary()));
