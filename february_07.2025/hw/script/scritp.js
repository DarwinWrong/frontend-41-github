const door = {
    isOpen: false,
    open: function() {
        this.isOpen = !this.isOpen;
        document.getElementById("doorButton").textContent = this.isOpen ? "Закрити двері" : "Відкрити двері";
    }
};

document.getElementById("doorButton").addEventListener("click", function() {
    door.open();
});

const actor = {
    role: "Гамлет",
    changeRole: function(newRole) {
        this.role = newRole;
        document.getElementById("actorRole").textContent = this.role;
    }
};

document.getElementById("changeRoleButton").addEventListener("click", function() {
    const newRole = document.getElementById("newRole").value;
    if (newRole) {
        actor.changeRole(newRole);
    }
});

const pets = ["Кіт", "Собака"];

function addPet(name) {
    pets.push(name);
    const li = document.createElement("li");
    li.textContent = name;
    document.getElementById("petsList").appendChild(li);
}

document.getElementById("addPetButton").addEventListener("click", function() {
    const petName = document.getElementById("petName").value;
    if (petName) {
        addPet(petName);
        document.getElementById("petName").value = "";
    }
});
