const participants = [
    { name: 'Олег', score: 85 },
    { name: 'Марина', score: 92 },
    { name: 'Влад', score: 78 },
]

function sortParticipants(participants) {
    return participants.sort((a, b) => b.score - a.score);
}
function listElements(displayParticipants) {
    const list = document.getElementById('container');
    
    displayParticipants.forEach((participant) => {
        const ol = document.createElement('ol');
        ol.textContent = `${participant.name}: ${participant.score}`;
        list.appendChild(ol);
    });
}

const display = sortParticipants(participants); 
listElements(display);