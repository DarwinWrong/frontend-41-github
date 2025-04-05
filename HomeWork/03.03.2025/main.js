//! не створив метод підрахунку кількості повторень слів
/**
 * Масив підказок про місцезнаходження штанців Спанч Боба.
 * @type {Array<{location: string, clue: string}>}
 */
const clues = [
  { location: "Крабсбургер", clue: "Можливо штанці десь на кухні" },
  { location: "Дім Сквідварда", clue: "Пахнуть штанці, але це Патрік" },
  { location: "Коралові рифи", clue: "Тут лише медузи..." },
  { location: "Пляж", clue: "Хтось бачив штанці під пальмою!" },
];
/**
 * Виводить ключі (властивості) кожної підказки.
 * @param {{location: string, clue: string}[]} arr - Масив підказок.
 */
function showCluesKeys(arr) {
  arr.forEach((obj) => {
    const keys = Object.keys(obj);
    console.log(`Підказки мають такі властивості: ${keys}`);
  });
}
/**
 * Виводить ключі та значення кожної підказки.
 * @param {{location: string, clue: string}[]} arr - Масив підказок.
 */
function showCluesEntries(arr) {
  arr.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) =>
      console.log(`${key}: ${value}`)
    );
  });
}
/**
 * Виводить лише значення (value) кожної підказки.
 * @param {{location: string, clue: string}[]} arr - Масив підказок.
 */
function showCluesValue(arr) {
  arr.forEach((obj) => {
    const values = Object.values(obj);
    console.log(`Підказки мають такі значення: ${values}`);
  });
}
/**
 * Перевіряє, чи в підказках згадується слово "штанці", і виводить true/false для кожного об'єкта.
 * @param {{location: string, clue: string}[]} arr - Масив підказок.
 */
function hasPants(arr) {
  return arr.forEach((obj) => {
    console.log(Object.values(obj).some((value) => value.includes("штанці")));
  });
}
/**
 * Заміщує слово "штанці" на "золоті штанці" в текстах підказок і виводить результат.
 * @param {{location: string, clue: string}[]} arr - Масив підказок.
 */
function renamePants(arr) {
  arr.forEach((obj) => {
    console.log(obj.clue.replace("штанці", "золоті штанці"));
  });
}
/**
 * Виводить повні об'єкти підказок, у яких згадується слово "штанці".
 * @param {{location: string, clue: string}[]} arr - Масив підказок.
 */
function objHasPants(arr) {
  arr.forEach((obj) => {
    if (obj.clue.includes("штанці")) {
      console.log(obj);
    }
  });
}
/**
 * Об'єднує всі підказки в один текстовий рядок для створення історії.
 * @param {{location: string, clue: string}[]} arr - Масив підказок.
 * @returns {void}
 */
function allStory(arr) {
  const story = arr.map((obj) => obj.clue).join(";");
  return console.log(story);
}
showCluesKeys(clues);
showCluesEntries(clues);
showCluesValue(clues);
hasPants(clues);
renamePants(clues);
objHasPants(clues);
allStory(clues);
