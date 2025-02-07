function partyPlanner() {
    if (arguments.length === 0) {
        console.log("Oops, the party is canceled 😢.");
        return;
    }

    console.log(`${arguments.length} guests have been invited to the party.`);

    let guestNames = [];
    for (let i = 0; i < arguments.length; i++) {
        guestNames.push(arguments[i]);
    }

    console.log(`Here are their names: ${guestNames.join(', ')}.`);
}

partyPlanner("John", "Alice", "Bob", "Charlie");

partyPlanner();
