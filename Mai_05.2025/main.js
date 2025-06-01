let libraryData = {
    books: []
};

let allBooks = []; 
let currentPage = 1;
const pageSize = 2;
let controller = null;

function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

function loadLibraryData() {
    if (controller) controller.abort();
    controller = new AbortController();

    fetch('library.json', { signal: controller.signal })
        .then(response => response.json())
        .then(data => {
            libraryData.books = data.books;
            allBooks = data.books;
            renderBooks();
        })
        .catch(error => {
            if (error.name === 'AbortError') {
                console.warn('Запит скасовано');
            } else {
                console.error('Помилка завантаження даних', error);
            }
        });
}

function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = "";

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    const books = libraryData.books.slice(start, end);

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Автор:</strong> ${book.author}</p>
            <p><strong>Жанр:</strong> ${book.genre}</p>
            <p><strong>Рік:</strong> ${book.year}</p>
        `;
        bookList.appendChild(bookItem);
    });

    renderPagination();
}

function renderPagination() {
    const pagination = document.getElementById('pageInfo');
    const totalPages = Math.ceil(libraryData.books.length / pageSize);
    pagination.textContent = `${currentPage} / ${totalPages}`;

    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages;
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderBooks();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    const totalPages = Math.ceil(libraryData.books.length / pageSize);
    if (currentPage < totalPages) {
        currentPage++;
        renderBooks();
    }
});

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', debounce((event) => {
    const query = event.target.value.toLowerCase();
    libraryData.books = allBooks.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
    currentPage = 1;
    renderBooks();
}, 300));

loadLibraryData();
