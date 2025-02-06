function checkAge() {
    let age = parseInt(prompt("Enter your age:"));
    
    if (age >= 0 && age < 12) {
        console.log("You are a child.");
    } else if (age >= 12 && age < 18) {
        console.log("You are a teenager.");
    } else if (age >= 18 && age < 60) {
        console.log("You are an adult.");
    } else if (age >= 60) {
        console.log("You are a senior citizen.");
    } else {
        console.log("Invalid age input.");
    }
}

function checkSymbol() {
    let number = prompt("Enter a number from 0 to 9:");
    let symbol;

    switch (number) {
        case "0": symbol = ")"; break;
        case "1": symbol = "!"; break;
        case "2": symbol = "@"; break;
        case "3": symbol = "#"; break;
        case "4": symbol = "$"; break;
        case "5": symbol = "%"; break;
        case "6": symbol = "^"; break;
        case "7": symbol = "&"; break;
        case "8": symbol = "*"; break;
        case "9": symbol = "("; break;
        default:
            console.log("The entered number is not in the range 0-9.");
            return;
    }

    console.log(`Symbol: ${symbol}`);
}

function checkDigits() {
    let number = prompt("Enter a three-digit number:");

    if (number.length !== 3 || isNaN(number)) {
        console.warn("Please enter a valid three-digit number.");
        return;
    }

    if (number[0] === number[1] || number[0] === number[2] || number[1] === number[2]) {
        console.log("The number contains identical digits.");
    } else {
        console.log("The number does not contain identical digits.");
    }
}

function checkLeapYear() {
    let year = parseInt(prompt("Enter a year:"));

    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        console.log("This is a leap year.");
    } else {
        console.log("This is not a leap year.");
    }
}

function checkPalindrome() {
    let number = prompt("Enter a five-digit number:");

    if (number.length !== 5 || isNaN(number)) {
        console.error("Please enter a valid five-digit number.");
        return;
    }

    let reversed = number.split("").reverse().join("");
    
    if (number === reversed) {
        console.log("The number is a palindrome.");
    } else {
        console.log("The number is not a palindrome.");
    }
}
