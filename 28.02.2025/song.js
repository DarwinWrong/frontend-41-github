const baseSong = {
    getInfo() {
        return `${this.name} - ${this.duration}`;
    }
}
function createSong(name, duration) {
    const song = Object.create(baseSong);
    song.name = name;
    song.duration = parseFloat(duration);
    return song;
}

const playlist = [];
const song = document.getElementById('song');
const time = document.getElementById('time');
const list = document.getElementById('list');
const displaySum = document.getElementById('displaySum');

document.getElementById('add').addEventListener('click', () => {
    const name = song.value;
    const duration = time.value;
    if (name && !isNaN(duration) && duration > 0) {
        playlist.push(createSong(name, duration));
        updateList();
        song.value = '';
        time.value = '';
    } else {
        console.log('Введіть коректні дані!');
    }
});

function updateList() {
    list.innerHTML = '';
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerText = song.getInfo();
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Видалити';
        deleteBtn.addEventListener('click', () => {
            playlist.splice(index, 1);
            updateList();
        });
        li.appendChild(deleteBtn);
        list.appendChild(li);
    })
}

document.getElementById('sortName').addEventListener('click', () => {
    playlist.sort((a, b) => a.name.localeCompare(b.name));
    updateList();
}
);

document.getElementById('sortTime').addEventListener('click', () => {
    playlist.sort((a, b) => a.duration - b.duration);
    updateList();
}
);

document.getElementById('sum').addEventListener('click', () => {
    const total = playlist.reduce((sum, song) => sum + song.duration, 0);
    displaySum.innerText = `Загальна тривалість: ${total} хв.`;
}
);