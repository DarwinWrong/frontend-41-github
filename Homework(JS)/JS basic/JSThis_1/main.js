const door = {
    isOpen: false,
    open() {
        let button = document.getElementById("button");
        if (this.isOpen) {
            button.textContent = "Open";
            this.isOpen = false;
        } else {
            button.textContent = "Close";
            this.isOpen = true;
        }
    }
}

const actor = {
    role: "Hamlet",
    newRole(actorRole) {
        document.getElementById("role").textContent = actorRole;
        this.role = actorRole;
    }
};
document.getElementById("submit").addEventListener("click", () => {
    let newRole = document.getElementById("actor").value;
    actor.newRole(newRole);
});


const petList = [
    {
        name: "Cat"
    },
    {
        name: "Dog"
    }
];

let parent = document.getElementById("petsList");

const loadList = () => {
    for (let i = 0; i < petList.length; i++) {
        let child = document.createElement("li");
        child.textContent = petList[i].name;
        parent.appendChild(child);
    }
}

const addPet = () => {
    let child = document.createElement("li");
    child.textContent = document.getElementById("petName").value;
    parent.appendChild(child);
}

window.onload = loadList;

