alert("Вітаємо на нашому вебсайті!");

const userName = prompt("Як вас звати?");
console.log("Ім'я користувача:", userName);

const isConfirmed = confirm("Чи хочете ви продовжити?");
console.log("Користувач підтвердив дію:", isConfirmed);

if (isConfirmed) {
    alert(`Дякуємо, ${userName}, що вирішили продовжити!`);
} else {
    alert("Шкода, що ви вирішили не продовжувати.");
}

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction"
}
console.log("title:", book.title);
console.log("author:", book.author);
console.log("year", book.year);
console.log("genre:", book.genre);

const colors = ["Червоний", "Зелений", "Синій", "Жовтий", "Фіолетовий"];
console.log("Перший колір:", colors[0]);
console.log("Останній колір:", colors[colors.length - 1]);
