// **************** BOM *****************
// Виведення повідомлення
window.alert('Привіт, це BOM!');
// Отримання поточного URL
console.log(window.location.href);

// Перехід на іншу сторінку
// window.location.href = 'https://www.example.com';

// Отримуємо інформацію про браузер
console.log(navigator.userAgent);

// Переходимо на одну сторінку назад
// window.history.back();
// Переходимо на одну сторінку вперед
// window.history.forward();

// Отримуємо ширину екрана
console.log(screen.width);
// ======================================

// **************** DOM *****************
// Отримуємо елемент за ID
let title = document.getElementById('content');
// Змінюємо текст всередині елемента
title.innerHTML = '<h1>Новий текст!</h1>';
// Додаємо новий елемент
let newParagraph = document.createElement('p');
newParagraph.textContent = 'Це новий абзац.';
title.appendChild(newParagraph);


// Змінюємо атрибут класу
let div = document.getElementById('article');
div.setAttribute('class', 'new-class');
// Змінюємо стиль
div.style.backgroundColor = 'yellow';


let button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Кнопка натиснута!');
});
// ======================================