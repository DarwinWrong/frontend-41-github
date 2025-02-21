const display = document.getElementById('role');
const actor = {
    role: 'Гамлет',
    changeRole: function (newRole) {
        this.role = newRole;
    },
    init: function () {
        display.textContent = this.role;
    }
};
actor.init();

document.getElementById('btn').addEventListener('click', function () {
    const newRole = document.getElementById('addRole').value;
    actor.changeRole(newRole);
    actor.init();
});