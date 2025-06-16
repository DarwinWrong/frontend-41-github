//Завдання 1
const changeTextBtn = document.getElementById("changeTextBtn");
const changeTextBtn2 = document.getElementById("changeTextBtn2");
const textElement = document.getElementById("text");

changeTextBtn.addEventListener("click", function () {
    textElement.textContent = "Змінений текст";
    changeTextBtn2.style.display = "block"; 
});

changeTextBtn2.addEventListener("click", function () {
    textElement.textContent = "Привіт, світ!";
    changeTextBtn2.style.display = "none";
});

//Завдання 2
document.getElementById("addItemBtn").addEventListener("click", function () {
    const input = document.getElementById("listInput");
    const list = document.getElementById("dynamicList");

    if (input.value.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = input.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Видалити";
        deleteButton.style.marginLeft = "10px";

        deleteButton.addEventListener("click", function () {
            list.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        list.appendChild(listItem);

        input.value = ""; 
    }
});

//Завдання 3
document.getElementById("changeImageBtn").addEventListener("click", function () {
    const image = document.getElementById("image");
    image.src = image.src.includes("image1.png") ? "image2.png" : "image1.png";
});
