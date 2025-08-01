export class BookViews {
  constructor() {
    this.form = document.getElementById('book-form');
    this.titleInput = document.getElementById('title-input');
    this.authorInput = document.getElementById('author-input');
    this.list = document.getElementById('book-list');
    this.filterInput = document.getElementById('filter-input');
    this.clearBtn = document.getElementById('clear-btn');
    this.countDisplay = document.getElementById('count');
  }

  getBookInput() {
    return {
      title: this.titleInput.value.trim(),
      author: this.authorInput.value.trim()
    };
  }

  clearInputs() {
    this.titleInput.value = '';
    this.authorInput.value = '';
  }

  renderBooks(books) {
    this.list.innerHTML = '';
    books.forEach(book => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${book.title}</strong> - ${book.author}
        <button data-id="${book.id}">Видалити</button>
      `;
      this.list.appendChild(li);
    });
    this.countDisplay.textContent = `Кількість книг: ${books.length}`;
  }

  bindAddBook(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const { title, author } = this.getBookInput();
      if (title && author) handler(title, author);
    });
  }

  bindDeleteBook(handler) {
    this.list.addEventListener('click', event => {
      if (event.target.tagName === "BUTTON") {
        const id = Number(event.target.dataset.id);
        handler(id);
      }
    });
  }

  bindFilter(handler) {
    this.filterInput.addEventListener('input', () => {
      handler(this.filterInput.value.trim());
    });
  }

  bindClearAll(handler) {
    this.clearBtn.addEventListener('click', () => handler());
  }
}