const pets = ["Cat", "Dog"];

function addPet(name) {
    pets.push(name);

    const li = document.createElement("li");
    li.textContent = name;

    const petsList = document.getElementById("petsList");
    petsList.appendChild(li);
}

document.getElementById("addPetButton").addEventListener("click", function () {
    const petNameInput = document.getElementById("petName");
    const name = petNameInput.value.trim();

    if (name !== "") {
        addPet(name);
        petNameInput.value = "";
    } else {
        alert("Please enter the name of an animal.");
    }
});
