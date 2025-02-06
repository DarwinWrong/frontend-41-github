function partyPlanner() {
    if (arguments.length === 0) {
        console.log('Ой, вечірка скасована 😢');
    } else {
        console.log(`На вечірку запросили ${arguments.length} гостей.`);
        console.log(`Ось їхні імена: ${Array.from(arguments).join(", ")}.`);
    }
}
partyPlanner("Олександр", "Ірина", "Микола");
partyPlanner("Даша");
partyPlanner();