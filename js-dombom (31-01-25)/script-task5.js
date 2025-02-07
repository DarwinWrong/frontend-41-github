document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("openModalButton");
    const modalWrapper = document.querySelector(".modal-wrapper");
    const closeButton = document.querySelector(".modal-window .close");

    openModalButton.addEventListener("click", function () {
        modalWrapper.style.display = "flex";
    });

    closeButton.addEventListener("click", function () {
        modalWrapper.style.display = "none";
    });

});
