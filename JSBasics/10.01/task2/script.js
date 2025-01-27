alert("Ласкаво просимо!");

const userName = prompt("Введіть ваше ім'я:");
console.log("Користувач: ", userName);

const isConfirmed = confirm("Ви підтверджуєте дію?");
console.log("Підтвердження: ", isConfirmed);

const book = {
    title: "Назва книги",
    author: "Автор",
    year: 2024,
    genre: "Жанр"
};

console.log(book.title, book.author, book.year, book.genre);

const colors = ["червоний", "зелений", "синій", "жовтий"];
console.log(colors[0], colors[colors.length - 1]);
