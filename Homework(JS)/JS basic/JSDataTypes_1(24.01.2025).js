// let userAge = parseInt(prompt("What is your age?"));
// switch(true) {
//     case (userAge < 0):
//         alert("U dont born");
//         break;
//     case userAge < 12:
//         alert("Child");
//         break;
//     case (userAge > 12 && userAge < 18):
//         alert("Teenager")
//         break;
//     case (userAge > 18 && userAge < 60):
//         alert("Adult");
//         break;
//     case (userAge > 60):
//         alert("Dead");
//         break;
//     default:
//         console.log(userAge);
// }

// let userNumber = parseInt(prompt("What is your number?"));
// switch(userNumber) {
//     case 0:
//         alert(")");
//         break;
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@")
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("$");
//         break;
//     case 5:
//         alert("%");
//         break;
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&")
//         break;
//     case 8:
//         alert("8");
//         break;
//     case 9:
//         alert("(");
//         break;
//     default:
//         console.log(userNumber);
// }

// let number = prompt("Введіть тризначне число:");
//
// if (number.length === 3 && !isNaN(number)) {
//     let digit1 = number[0];
//     let digit2 = number[1];
//     let digit3 = number[2];
//
//     if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
//         alert("У числі є однакові цифри!");
//     } else {
//         alert("Усі цифри різні.");
//     }
// } else {
//     alert("Будь ласка, введіть коректне тризначне число!");
// }

// let year = prompt("Введіть рік:");
//
// if (!isNaN(year) && year > 0) {
//     year = Number(year);
//
//     if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
//         alert(year + " - високосний рік!");
//     } else {
//         alert(year + " - не високосний рік.");
//     }
// } else {
//     alert("Будь ласка, введіть коректний рік!");
// }

let userNumber = prompt("Enter your number");

var numberArr = userNumber.toString().split("");

let isPolli;

if(!isNaN(userNumber) && numberArr.length === 5) {
    for (let i = 0; i < numberArr.length; i++) {
        isPolli = (numberArr[i] === numberArr[(numberArr.length - 1) - i]) ? "Polli" : "noPolli";
    }
    console.log(isPolli);
} else {
    console.log("invalid number");
}
