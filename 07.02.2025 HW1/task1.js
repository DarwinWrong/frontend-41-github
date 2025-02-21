const door = {
    isOpen: false,
    open: function () {
        this.isOpen = true;
        document.getElementById("door").textContent = "Відчинено";
        document.getElementById("openClose").textContent = "Закрити";
    },
    close: function () {
        this.isOpen = false;
        document.getElementById("door").textContent = "Зачинено";
        document.getElementById("openClose").textContent = "Відкрити";
    }
};  

document.getElementById("openClose").addEventListener("click", function () {
    if (door.isOpen) {
        door.close();
    } else {
        door.open();
    }
}
);
