const steps = [
    "1: Take the eggs.",
    "2: Break them into a bowl.",
    "3: Add salt and pepper.",
    "4: Beat well.",
    "5: Heat the pan.",
    "6: Pour the eggs into the pan.",
    "7: Cook until done."
];

const addSalt = confirm("Do you want to add salt?");

for (let i = 0; i < steps.length; i++) {
    if (i === 2 && !addSalt) {
        continue;
    }

    if (i === 4) {
        let response = prompt(
            "Step 5: Heat the pan.\nIf you're hungry, type \"I'm hungry!\" to stop; otherwise, press OK or leave blank to continue."
        );
        if (response === "I'm hungry!") {
            console.log("Well, then eat raw eggs 😅");
            break;
        }
    }

    console.log(steps[i]);
}
