let sum = prompt("Введіть суму:");
if (sum >= 200 && sum < 300) {
    console.log(sum - (sum * 0.03));
} else if (sum >= 300 && sum < 500) {
    console.log(sum - (sum * 0.05));
} else if (sum >= 500){
    console.log(sum - (sum * 0.07));
}