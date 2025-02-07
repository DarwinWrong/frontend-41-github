document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById("imageElement");
    const changeImageButton = document.getElementById("changeImageButton");

    changeImageButton.addEventListener("click", function () {
        imageElement.src = "image2.jpg";
    });
});
