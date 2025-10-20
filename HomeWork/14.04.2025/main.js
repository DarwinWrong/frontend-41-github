//!1
document.getElementById("intName").addEventListener("input", function () {
  this.value = this.value.replace(/[0-9]/, "");
});
//!2
document.getElementById("openBtn").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("unvisible");
});
document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("modal").classList.add("unvisible");
});
//!4
let index = 0;
const colors = ["red", "yellow", "green"];

function nextColor() {
  document.getElementById("red").style.backgroundColor = "gray";
  document.getElementById("yellow").style.backgroundColor = "gray";
  document.getElementById("green").style.backgroundColor = "gray";

  document.getElementById(colors[index]).style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}
nextColor();
//!5
const bookList = document.getElementById("bookList");
let selected = null;

bookList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    if (selected) {
      selected.style.backgroundColor = "";
    }
    event.target.style.backgroundColor = "orange";
    selected = event.target;
  }
});
