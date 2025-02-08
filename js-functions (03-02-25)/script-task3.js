const participants = [
    { name: 'Charlie', score: 85 },
    { name: 'Diana', score: 95 },
    { name: 'Eve', score: 80 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 90 }
];

function sortParticipants(participantsArray) {
    return participantsArray.sort((a, b) => b.score - a.score);
}

function createRatingList(participantsArray) {
    const ol = document.createElement('ol');

    participantsArray.forEach(participant => {
        const li = document.createElement('li');
        li.textContent = `${participant.name} - Score: ${participant.score}`;
        ol.appendChild(li);
    });

    return ol;
}

function displayRating() {
    const sortedParticipants = sortParticipants(participants);

    const ratingList = createRatingList(sortedParticipants);

    const ratingDiv = document.getElementById('rating');
    ratingDiv.innerHTML = '';

    ratingDiv.appendChild(ratingList);
}

document.addEventListener('DOMContentLoaded', displayRating);
