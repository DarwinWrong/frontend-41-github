document.querySelector('p').innerHTML = 'Hola amigos!';


const createNewItem = () => {
    let text = document.getElementsByClassName("input")[0].value;

    if (text === "") {
        alert("Введіть текст!");
        return;
    }
    let li = document.createElement("li");
    li.textContent = text;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(deleteBtn);
    document.getElementsByClassName("dynamicList")[0].appendChild(li);
    text.value = "";
}

document.querySelector(`img`).setAttribute("src", "keyboard.jpg");

