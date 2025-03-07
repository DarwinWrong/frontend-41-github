// **************** BOM *****************
// window.alert('Привіт, це BOM!');
// console.log(window.location.href);
//
// window.location.href = 'https://www.example.com';
//
// // Отримуємо інформацію про браузер
// console.log(navigator.userAgent);
//
// window.history.back();
// window.history.forward();
//
// console.log(screen.width);
// ======================================


// **************** DOM *****************
let content = document.getElementById('content');

content.innerHTML = '<h1>Новий текст!</h1>';

let newParagraph = document.createElement('p');
newParagraph.textContent = 'Це новий абзац.';
content.appendChild(newParagraph);


let div = document.getElementById('article');
div.setAttribute('class', 'new-class');
div.classList.add('new-class-2');
div.style.backgroundColor = 'yellow';


var button = document.getElementById('myButton');
button.addEventListener('click', function () {
    alert('Кнопка натиснута!');
});

const list = document.querySelector('.list');
const firstLi = list.childNodes[0];
console.log(list);
console.log(list.childNodes)
console.log(firstLi)
console.log(firstLi.nextSibling)
const secondEl = firstLi.nextSibling.nextSibling;
console.log(secondEl.previousSibling)
console.log(secondEl.parentNode)
// ======================================

// **************** ISSUES *****************
var button = document.querySelector("button");
button.addEventListener("click", function () {
    console.log(this);
});
// addEventListener не спрацює тому що document.body.innerHTML += '' перезапише весь html З кнопкою
document.body.innerHTML += '<button class="btn">Нова кнопка</button>'; // Перезаписує весь body!

// 1) Використовуємо documentFragment для динамічного створення елементів
const newButton = document.createElement("button");
newButton.className = "btn";
newButton.textContent = "Нова кнопка";
document.body.appendChild(newButton); // Додає кнопку без перезапису

// 2) Делегування подій
document.body.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        console.log(event.target); // Працює для всіх кнопок, навіть динамічно створених!//-
        console.log(event.target); // Logs the clicked button element.//+
    }
});


