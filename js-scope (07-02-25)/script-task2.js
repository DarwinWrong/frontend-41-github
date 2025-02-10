const actor = {
    role: "Hamlet",
    changeRole: function (newRole) {
        this.role = newRole;
        const actorRoleElement = document.getElementById('actorRole');
        actorRoleElement.textContent = "Current Role: " + this.role;
    }
};

document.getElementById("changeRoleButton").addEventListener("click", function () {
    const newRole = document.getElementById("roleInput").value;

    if (newRole.trim() !== "") {
        actor.changeRole(newRole);
    } else {
        alert("Please enter a valid role.");
    }
});
