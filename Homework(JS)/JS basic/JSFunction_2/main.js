const participants = [
    {name: 'Vlad', score: 50},
    {name: 'Vova', score: 43},
    {name: 'Valera', score: 70},
    {name: 'Andriy', score: 100},
];

const showList = (list) => {
    let parent = document.getElementById('list');

    for (let i = 0; i < list.length; i++) {
        let child = document.createElement('li');
        child.textContent = `Student name: ${list[i].name}, student grades: ${list[i].score}`;
        parent.appendChild(child);
    }
}

const sortParticipants = (a, b) => {
    const bandA = a.score;
    const bandB = b.score;

    let comparison = 0;
    if (bandA > bandB) {
        comparison = -1;
    } else if (bandA < bandB) {
        comparison = 1;
    }
    return comparison;
}


participants.sort(sortParticipants);
showList(participants);

const assistant = () => {
    let text = document.getElementById('assistant').value.toUpperCase();

    switch(text) {
        case 'TIME':
            let time = new Date();
            let hours = time.getHours();
            let minutes = time.getMinutes();
            alert(`Now is ${hours} hours and ${minutes} minutes`);
            break;
        case 'DATE':
            let date = new Date();
            let currentDate = date.toLocaleDateString('en-US',{
                year: '2-digit',
                month: '2-digit',
                day: '2-digit',
            });
            alert(`${currentDate}`);
            break;
        case 'JOKE':
            alert(`Why do programmers prefer dark mode? Because light attracts bugs!`);
    }
}