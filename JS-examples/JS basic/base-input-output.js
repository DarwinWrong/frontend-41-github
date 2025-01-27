alert('Ласкаво просимо на наш сайт!');

let name = prompt('Як вас звати?', 'Ім’я');

if (name) {
    alert(`Привіт, ${name}!`);
} else {
    alert('Ви не ввели ім’я');
}