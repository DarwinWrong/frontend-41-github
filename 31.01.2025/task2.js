const list = document.getElementById('item');
const input = document.getElementById('itemInput');
const addButton = document.getElementById('itemAdd');

addButton.addEventListener("click", function (){
    const itemText = input.value;
    const listItem = document.createElement("li");
    listItem.textContent = itemText; 
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.addEventListener("click", function () {
        listItem.remove();
    })
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    input.value = "";
})