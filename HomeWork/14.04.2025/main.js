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
