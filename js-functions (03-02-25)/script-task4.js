function assistant(command) {
    let response;
    switch (command.toLowerCase()) {
        case 'time':
            response = '10:30';
            break;
        case 'date':
            response = '03.02.2025';
            break;
        case 'joke':
            response = "Why can't a computer swim? Because it's afraid of viruses!";
            break;
        default:
            response = "Sorry, I didn't understand that command.";
    }
    return response;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitCommand').addEventListener('click', () => {
        const commandInput = document.getElementById('command');
        const command = commandInput.value.trim();

        const output = assistant(command);

        document.getElementById('response').textContent = output;
    });
});
