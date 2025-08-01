export class BookModel {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  saveToStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  addBook(title, author) {
    const duplicate = this.books.some(book =>
      book.title.toLowerCase().trim() === title.toLowerCase().trim() &&
      book.author.toLowerCase().trim() === author.toLowerCase().trim()
    );
    if (duplicate) {
      throw new Error(`Книга "${title}" з автором "${author}" вже існує`);
    }
    const book = {
      id: Date.now(),
      title,
      author
    };
    this.books.push(book);
    this.sortBooks();
    this.saveToStorage();
  }

  deleteBook(id) {
    this.books = this.books.filter(book => book.id !== id);
    this.saveToStorage();
  }

  clearAllBooks() {
    this.books = [];
    this.saveToStorage();
  }

  getBooks() {
    return this.books;
  }

  sortBooks() {
    this.books.sort((a, b) => a.title.localeCompare(b.title));
  }

  getFilteredBooks(filter) {
    return this.books.filter(book =>
      book.author.toLowerCase().includes(filter.toLowerCase())
    );
  }
}