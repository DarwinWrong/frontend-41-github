document.addEventListener("DOMContentLoaded", () => {
  
    const participants = [
        { name: "Олексій", score: 75 },
        { name: "Марія", score: 90 },
        { name: "Іван", score: 60 },
        { name: "Софія", score: 85 },
        { name: "Дмитро", score: 80 }
    ];

    function sortParticipants(participants) {
        return participants.sort((a, b) => b.score - a.score);
    }

    function displayParticipants(sortedList) {
        const list = document.getElementById("participants-list");
        sortedList.forEach(participant => {
            const li = document.createElement("li");
            li.textContent = `${participant.name} - ${participant.score} балів`;
            list.appendChild(li);
        });
    }

    displayParticipants(sortParticipants(participants));

    document.getElementById("execute").addEventListener("click", function() {
        const command = document.getElementById("command").value.trim().toLowerCase();
        document.getElementById("response").textContent = assistant(command);
    });

    function assistant(command) {
        switch (command) {
            case "час":
                return new Date().toLocaleTimeString("uk-UA");
            case "дата":
                return new Date().toLocaleDateString("uk-UA");
            case "жарт":
                return "Чому комп'ютер не може плавати? Бо боїться вірусів!";
            default:
                return "Невідома команда. Спробуйте: час, дата або жарт.";
        }
    }
});
