document.getElementById('taskSelector').addEventListener('change', function() {
    const selectedTask = this.value;
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = ""; 

    if (selectedTask === "changeText") {
        showChangeTextTask(taskContainer);
    } else if (selectedTask === "dynamicList") {
        showDynamicListTask(taskContainer);
    } else if (selectedTask === "changeImage") {
        showChangeImageTask(taskContainer);
    }
});

function showChangeTextTask(container) {
    container.innerHTML = `
        <p id="textParagraph">Привіт, світ!</p>
        <button onclick="changeText()">Змінити текст</button>
    `;
}

function changeText() {
    document.getElementById('textParagraph').textContent = "Змінений текст";
}

function showDynamicListTask(container) {
    container.innerHTML = `
        <input type="text" id="itemInput" placeholder="Введіть елемент">
        <button onclick="addItem()">Додати</button>
        <ul id="itemList"></ul>
    `;
}

function addItem() {
    const input = document.getElementById('itemInput');
    const inputValue = input.value;

    if (inputValue === "") return;

    const li = document.createElement('li');
    li.textContent = inputValue;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Видалити";
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);
    document.getElementById('itemList').appendChild(li);
    input.value = "";
}

function showChangeImageTask(container) {
    container.innerHTML = `
        <img id="taskImage" src="./img/1-toys.png" alt="Картинка" width="300">
        <br>
        <button onclick="changeImage()">Змінити зображення</button>
    `;
}

function changeImage() {
    document.getElementById('taskImage').src = "./img/2-toys.png";
}
