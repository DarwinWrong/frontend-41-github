let count = 0;
while (count < 5) {
    console.log('count', count);
    count++; // count = count + 1;
}


// ===================
let count2 = 0;
do {
    console.log('count2', count2);
    count2++;
} while (count2 < 5);


// ====================
for (let i = 0; i < 5; i++) {
    console.log('i', i);
}

// =====================
for (let k = 0; k < 10; k++) {
    if (k === 5) {
        break; // вихід з циклу, якщо i дорівнює 5
    }
    console.log('k, break', k);
}

let j = 0;
while (j < 10) {
    if (j === 2) {
        break; // вихід з циклу, якщо i дорівнює 5
    }
    console.log('j, break', j);
    j++;
}

let v = 0;
do {
    if (v === 5) {
        break; // вихід з циклу, якщо i дорівнює 5
    }
    console.log('v, break', v);
    v++;
} while (v < 10);

// =====================
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // пропускає ітерацію, якщо i дорівнює 2
    }
    console.log(i);
}


// =====================
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // вихід з обох циклів
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}