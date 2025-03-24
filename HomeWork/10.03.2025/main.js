const foresights = [
  "Сьогодні твій день! ☀️",
  "На тебе чекає несподіваний сюрприз! 🎁",
  "Завтра принесе нові можливості! 🚀",
  "Будь сміливим, і все вийде! 💪",
  "Доля посміхається тобі! 😊",
  "Очікуй гарні новини! 📰",
  "Не бійся ризикувати – це твій шанс! 🎲",
  "Твої зусилля скоро окупляться! 💰",
  "Навколо тебе багато хороших людей! ❤️",
  "Час для нових починань! ✨",
];
const divText = document.getElementById("foresight");
function getforesight() {
  const p = document.createElement("p");
  const span = document.createElement("span");
  setTimeout(() => {
    divText.innerHTML = "";
    const randomInd = Math.floor(Math.random() * foresights.length);
    p.textContent = foresights[randomInd];
    span.textContent = new Date().toLocaleString();
    p.appendChild(span);
    divText.appendChild(p);
  }, 2000);
}
const btnAdd = document.getElementById("btn");
btnAdd.addEventListener("click", () => {
  getforesight();
});
