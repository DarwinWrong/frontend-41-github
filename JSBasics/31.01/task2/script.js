function openModal(modal) {
    modal.style.display = "block";
}

function closeModal(modal) {
    modal.style.display = "none";
}

//Завдання 1 (Рандомну генерацію кольору я реалізував з чатомгпт)
document.getElementById("openTask1").addEventListener("click", function () {
    openModal(document.getElementById("modalTask1"));
});

document.getElementById("closeTask1").addEventListener("click", function () {
    closeModal(document.getElementById("modalTask1"));
});

document.querySelectorAll(".clickable").forEach(paragraph => {
    paragraph.addEventListener("click", function () {
        this.style.color = getRandomColor();
    });
});

function getRandomColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

//Завдання 2
document.getElementById("openTask2").addEventListener("click", function () {
    openModal(document.getElementById("modalTask2"));
});

document.getElementById("closeTask2").addEventListener("click", function () {
    closeModal(document.getElementById("modalTask2"));
});


document.getElementById("openInnerModal").addEventListener("click", function () {
    openModal(document.getElementById("innerModal"));
});

document.getElementById("closeInnerModal").addEventListener("click", function () {
    closeModal(document.getElementById("innerModal"));
});
