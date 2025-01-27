const number = prompt("Введіть тризначне число:");
if (number.length === 3 &&
    (number[0] === number[1]) ||
    (number[0] === number[2]) ||
    (number[1] === number[2])
) {
    console.log("У числі є однакові цифри.");
} else{
    console.log("У числі немає однакових цифр.");
}