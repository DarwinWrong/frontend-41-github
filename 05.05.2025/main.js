let libraryData = {
    "books": [],
    "filteredBooks": [],
    currentPage: 1,
    pageSize: 10
}
let abortController = null
let debounceTimer = null;


function loadLibraryData() {
    if (abortController) {
        abortController.abort()
    }
    abortController = new AbortController()
    fetch('library.json', { signal: abortController.signal })
        .then(response => response.json())
        .then(data => {
            libraryData.books = data.books;
            libraryData.filteredBooks = data.books;
            libraryData.currentPage = 1;
            renderBooks();
            renderPagination();
        })
        .catch(error => {
            if (error.name === 'AbortError') {
                console.log('Запит скасовано');
            } else {
                console.error('Помилка завантаження:', error);
            }
        });
}

function renderBooks(books) {
    const bookList = document.getElementById('booklist');
    bookList.innerHTML = ''; 
    const start = (libraryData.currentPage - 1) * libraryData.pageSize
    const end = start + libraryData.pageSize
    const booksToShow = libraryData.filteredBooks.slice(start, end)
    booksToShow.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('bookItem')
        bookItem.innerHTML = `
        <h3>${book.author}</h3>
        <p>${book.title}</p>
        <p>${book.year}</p>
        `
        bookList.appendChild(bookItem)
    });
}

function renderPagination() {
    const pagination = document.getElementById('pagination')
    pagination.innerHTML = ''

    const totalPages = Math.ceil(libraryData.filteredBooks.length / libraryData.pageSize)
    for (let i = 1; i <= totalPages; i++){
        const pageButton = document.createElement('button')
        pageButton.textContent = i
        if (i === libraryData.currentPage) pageButton.disabled = true
        pageButton.addEventListener('click', () => {
            libraryData.currentPage = i
            renderBooks()
            renderPagination()
        })
        pagination.appendChild(pageButton)
    }
}

document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase()
    clearTimeout(debounceTimer)

    debounceTimer = setTimeout(() => {
        libraryData.filteredBooks = libraryData.books.filter(book => 
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        )
        libraryData.currentPage = 1
        renderBooks()
        renderPagination()
    }, 200)
})
 loadLibraryData()