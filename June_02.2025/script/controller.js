export class BookController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddBook(this.handleAddBook);
    this.view.bindDeleteBook(this.handleDeleteBook);
    this.view.bindFilter(this.handleFilterBooks);
    this.view.bindClearAll(this.handleClearAllBooks);

    this.view.renderBooks(this.model.getBooks());
  }

  handleAddBook = (title, author) => {
    try {
      this.model.addBook(title, author);
      this.view.clearInputs();
      this.view.renderBooks(this.model.getBooks());
    } catch (error) {
      alert(error.message);
    }
  }

  handleDeleteBook = (id) => {
    this.model.deleteBook(id);
    this.view.renderBooks(this.model.getBooks());
  }

  handleFilterBooks = (filterText) => {
    const filtered = this.model.getFilteredBooks(filterText);
    this.view.renderBooks(filtered);
  }

  handleClearAllBooks = () => {
    if (confirm('Точно очистити всі книги?')) {
      this.model.clearAllBooks();
      this.view.renderBooks([]);
    }
  }
}