class BookModel {
    constructor() {
        this.books = []
        this.books = JSON.parse(localStorage.getItem('books')) || []
    }

    addBook(title, author) {
        const duplicate = this.books.some(book =>
            book.title.toLowerCase() === title.toLowerCase().trim() &&
            book.author.toLowerCase() === author.toLowerCase().trim()
        )
        if (duplicate) {
            throw new Error('Книга з таким іменем та автором вже існує.')
        }
        const book = {
            id: Date.now(),
            title,
            author
        }
        this.books.push(book)
        this.saveBooks()
    }

    deleteBook(id) {
        this.books = this.books.filter(book => book.id !== id)
        this.saveBooks()
    }

    getBooks() {
        return this.books
    }

    sortBooks() {
        this.books.sort((a, b) => {
            this.books.sort((a, b) => a.title.localeCompare(b.title))
        })
    }
    clearBooks() {
        this.books = []
        this.saveBooks()
    }
    saveBooks() {
        localStorage.setItem('books', JSON.stringify(this.books))
    }

}