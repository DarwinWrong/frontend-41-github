const img = document.getElementById("picture");
const btn = document.getElementById("change");
btn.addEventListener("click", () => {
    img.src = img.src.includes("project1.jpg") ? "project2.jpg" : "project1.jpg";
})