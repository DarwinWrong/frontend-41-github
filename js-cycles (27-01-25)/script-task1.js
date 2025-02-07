const products = ["bread", "milk", "apples", "chocolate", "bananas"];

let i = 0;

while (i < products.length) {
    console.log(`Adding ${products[i]} to the cart...`);

    if (products[i] === "chocolate") {
        console.log("A sweet life is guaranteed!");
    }

    i++;
}

console.log("All products in the cart! Now you can go to the checkout.");