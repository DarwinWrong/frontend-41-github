// setTimeout(() => {
//   console.log("hi");
// }, 0);
// console.log("1");
// const btn = document.getElementById("timeout");
// btn.addEventListener("click", () => {
//   setTimeout(() => {
//     console.log("Hi");
//   }, 3000);
// });
let i = 10;
const timer = setInterval(() => {
  if (i >= 0) {
    console.log(`${i}`);
    document.getElementById("timer").textContent = i;
    i -= 2;
  } else {
    clearInterval(timer);
    console.log("end");
  }
}, 2000);
// document.getElementById("timer").textContent = i;
