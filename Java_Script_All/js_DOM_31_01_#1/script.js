
function changeText() {
    document.getElementById("text").textContent = "Змінений текст";
}


function addItem() {
    const input = document.getElementById("itemInput");
    const list = document.getElementById("list");

    if (input.value.trim() === "") return; 

    const li = document.createElement("li");
    li.textContent = input.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.onclick = function () {
        list.removeChild(li);
    };

    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = ""; 
}


function changeImage() {
    document.getElementById("image").src = "img/image2.jpg"; 
}
