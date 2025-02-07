document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll("p");

    const fixedColors = ["red", "blue", "green"];

    paragraphs.forEach(function (paragraph, index) {
        paragraph.addEventListener("click", function () {
            paragraph.style.color = fixedColors[index % fixedColors.length];
        });
    });
});
