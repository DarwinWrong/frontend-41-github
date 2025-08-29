class BookController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddBook(this.handleAddBook)
        this.view.bindDeleteBook(this.handleDeleteBook)
        this.view.bindFilter(this.handleFilter)
        this.view.bindClear(this.handleClear)

        this.view.renderBook(this.model.getBooks());
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
        this.model.deleteBook(id)
        this.view.renderBooks(this.model.getBooks())
    }
    handleFilter = (author) => {
        const books = this.model.getBooks().filter(book =>
            book.author.toLowerCase().includes(author.toLowerCase())
        )
        this.view.renderBooks(books)
    }
    handleClear = () => {
        this.model.clearBooks()
        this.view.renderBooks(this.model.getBooks())
    }
}