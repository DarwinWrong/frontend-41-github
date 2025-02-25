const participants = [
    { name: "Іван", score: 85 },
    { name: "Олександр", score: 92 },
    { name: "Марія", score: 78 },
    { name: "Олена", score: 90 },
    { name: "Петро", score: 65 }
  ];
  
  function sortParticipants(participants) {
    return participants.sort((a, b) => b.score - a.score);
  }
  
  function displayParticipants(participants) {
    const participantList = document.getElementById("participant-list");
    participantList.innerHTML = "";  
  
    participants.forEach(participant => {
      const listItem = document.createElement("li");
      listItem.textContent = `${participant.name} - Бал: ${participant.score}`;
      participantList.appendChild(listItem);
    });
  }
  
  const sortedParticipants = sortParticipants(participants);
  displayParticipants(sortedParticipants);
  
  function assistant(command) {
    const responseElement = document.getElementById('assistant-response');
  
    switch (command.toLowerCase()) {
      case 'час':
        const currentTime = new Date().toLocaleTimeString();
        responseElement.textContent = `Зараз: ${currentTime}`;
        break;
      case 'дата':
        const currentDate = new Date().toLocaleDateString();
        responseElement.textContent = `Сьогодні: ${currentDate}`;
        break;
      case 'жарт':
        responseElement.textContent = "Чому комп'ютер не може плавати? Бо боїться вірусів!";
        break;
      default:
        responseElement.textContent = "Команда не розпізнана. Спробуйте ще раз!";
    }
  }
  
  document.getElementById('submit-command').addEventListener('click', function() {
    const command = document.getElementById('command-input').value;
    assistant(command);  
  });
  