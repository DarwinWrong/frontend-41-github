const input = document.getElementById('text');
const button = document.getElementById('done');
const result = document.getElementById('result');

button.addEventListener('click', function () {
    const command = input.value.toLowerCase();
    result.textContent = hint(command)
});

function hint(command) {
    switch (command) {
        case 'час':
            return new Date().toLocaleTimeString();
        case 'дата':
            return new Date().toLocaleDateString();
        case 'жарт':
            return "Чому комп'ютер не може плавати? Бо боїться вірусів!";
        default:
            return "Вибачте, я не розумію Вас";
    }
}
