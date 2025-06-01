let libraryData = {
    "books": []
};

function loadLibraryData() {
    fetch('library.json') // виправлено назву
        .then(response => response.json())
        .then(data => {
            libraryData.books = data.books;
            renderBooks(libraryData.books); // виправлено виклик функції
        })
        .catch(error => console.error('Error loading data', error));
}

function renderBooks(books) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = "";

    books.forEach(book => {
        const bookItem = document.createElement('div'); // створення div
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <h3>Author: ${book.author}</h3>
            <h3>Title: ${book.title}</h3>
            <h3>Year: ${book.year}</h3>
            <h3>Genre: ${book.genre}</h3>
            <hr/>
        `;
        bookList.appendChild(bookItem);
    });
}

window.addEventListener('DOMContentLoaded', loadLibraryData);
