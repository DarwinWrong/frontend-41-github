// Функція, щоб перевірити, чи викликається правильно
function logFunctionCall(functionName) {
  console.log(functionName + " викликається");
}

// Використання alert
function showMessage() {
  logFunctionCall('showMessage');
  alert("Привіт, це повідомлення!");
}

// Використання prompt
function getUserName() {
  logFunctionCall('getUserName');
  const userName = prompt("Як твоє ім'я?");
  console.log("Ім'я користувача:", userName);
}

// Використання confirm
function confirmAction() {
  logFunctionCall('confirmAction');
  const isConfirmed = confirm("Ти хочеш продовжити?");
  console.log("Підтверджено:", isConfirmed);
}

// Робота з об'єктом
const book = {
  title: "Сучасна веб-розробка",
  author: "Іван Іванов",
  year: 2023,
  genre: "Навчальна література"
};

function displayBookInfo() {
  logFunctionCall('displayBookInfo');
  console.log("Назва книги:", book.title);
  console.log("Автор:", book.author);
  console.log("Рік видання:", book.year);
  console.log("Жанр:", book.genre);
}

// Робота з масивом
const colors = ["червоний", "зелений", "синій", "жовтий"];

function displayColors() {
  logFunctionCall('displayColors');
  console.log("Перший колір:", colors[0]);
  console.log("Останній колір:", colors[colors.length - 1]);
}

// Додаємо обробники подій для кнопок
document.getElementById("showMessageBtn").addEventListener("click", showMessage);
document.getElementById("getUserNameBtn").addEventListener("click", getUserName);
document.getElementById("confirmActionBtn").addEventListener("click", confirmAction);
document.getElementById("displayBookInfoBtn").addEventListener("click", displayBookInfo);
document.getElementById("displayColorsBtn").addEventListener("click", displayColors);
