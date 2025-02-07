document.addEventListener("DOMContentLoaded", function () {
    const addItemBtn = document.getElementById("addItemBtn");
    const itemInput = document.getElementById("itemInput");
    const list = document.getElementById("list");

    addItemBtn.addEventListener("click", function () {
        const itemText = itemInput.value.trim();

        if (itemText !== "") {
            const listItem = document.createElement("li");

            const textNode = document.createTextNode(itemText);
            listItem.appendChild(textNode);

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            deleteBtn.style.marginLeft = "10px";

            deleteBtn.addEventListener("click", function () {
                list.removeChild(listItem);
            });

            listItem.appendChild(deleteBtn);

            list.appendChild(listItem);

            itemInput.value = "";
        }
    });
});
