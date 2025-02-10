const door = {
    isOpen: false,
    open: function () {
        this.isOpen = true;
    }
};

const doorButton = document.getElementById('doorButton');

doorButton.addEventListener('click', function () {
    if (!door.isOpen) {
        door.open();
        doorButton.innerText = 'Door is now open!';
    }
});
