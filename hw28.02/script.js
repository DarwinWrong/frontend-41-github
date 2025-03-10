const BaseSong = {
    getInfo() {
        return `${this.name} - ${this.duration} хв.`;
    }
};

function createSong(name, duration) {
    let song = Object.create(BaseSong);
    song.name = name;
    song.duration = parseFloat(duration);
    return song;
}

let playlist = [];

function updatePlaylist() {
    const list = document.getElementById("playlist");
    list.innerHTML = "";
    playlist.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.getInfo();
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Видалити";
        deleteButton.onclick = () => {
            playlist.splice(index, 1);
            updatePlaylist();
        };
        
        li.appendChild(deleteButton);
        list.appendChild(li);
    });
}

document.getElementById("addSong").addEventListener("click", () => {
    const name = document.getElementById("songName").value.trim();
    const duration = document.getElementById("songDuration").value.trim();
    
    if (name && duration && !isNaN(duration) && duration > 0) {
        playlist.push(createSong(name, duration));
        updatePlaylist();
    }
});

document.getElementById("sortByName").addEventListener("click", () => {
    playlist.sort((a, b) => a.name.localeCompare(b.name));
    updatePlaylist();
});

document.getElementById("sortByDuration").addEventListener("click", () => {
    playlist.sort((a, b) => a.duration - b.duration);
    updatePlaylist();
});

document.getElementById("calculateTotalTime").addEventListener("click", () => {
    const totalTime = playlist.reduce((sum, song) => sum + song.duration, 0);
    document.getElementById("totalTime").textContent = `Загальна тривалість: ${totalTime} хв.`;
});

document.getElementById("clearPlaylist").addEventListener("click", () => {
    playlist = [];
    updatePlaylist();
});

document.getElementById("searchSong").addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase();
    const filteredSongs = playlist.filter(song => song.name.toLowerCase().includes(query));
    const list = document.getElementById("playlist");
    list.innerHTML = "";
    
    filteredSongs.forEach((song, index) => {
        const li = document.createElement("li");
        li.textContent = song.getInfo();
        list.appendChild(li);
    });
});
