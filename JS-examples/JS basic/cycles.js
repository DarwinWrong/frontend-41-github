let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}


// ===================
let count2 = 0;
do {
    console.log(count2);
    count2++;
} while (count2 < 5);


// ====================
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// =====================
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // вихід з циклу, якщо i дорівнює 5
    }
    console.log(i);
}

let j = 0;
while (j < 10) {
    if (j === 5) {
        break; // вихід з циклу, якщо i дорівнює 5
    }
    console.log(j);
    j++;
}

let i = 0;
do {
    if (i === 5) {
        break; // вихід з циклу, якщо i дорівнює 5
    }
    console.log(i);
    i++;
} while (i < 10);

// =====================
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // пропускає ітерацію, якщо i дорівнює 2
    }
    console.log(i);
}
