const paragraph = document.querySelectorAll(".text");
const newColor = "blue";
paragraph.forEach(paragraph => {
    paragraph.addEventListener("click", () => {
        paragraph.style.color = newColor;
    })
});
