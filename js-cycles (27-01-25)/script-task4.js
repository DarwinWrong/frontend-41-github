function greetUser(name, age) {
    if (age === 0) {
        let message = `Wow, ${name}! You probably don't exist!`;
        console.log(message);
        return message;
    }

    if (age < 18) {
        let message = `Hello, ${name}! You're still young and have a lot of time to learn JS!`;
        console.log(message);
        return message;
    }

    if (age >= 18 && age <= 30) {
        let message = `Hello, ${name}! Time to learn JS and build a career!`;
        if (age > 18 && age < 30) {
            while (age > 18 && age < 30) {
                console.log(message);
                break;
            }
        } else {
            console.log(message);
        }
        return message;
    }

    if (age > 30) {
        let message = `Hello, ${name}! It's never too late to start a new hobby - why not JS?`;
        console.log(message);
        return message;
    }
}

greetUser("John", 0);
greetUser("Alice", 15);
greetUser("Bob", 25);
greetUser("Charlie", 45);