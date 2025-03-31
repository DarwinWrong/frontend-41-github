
const BaseSong = {
    getInfo() {
        return `${this.name} (${this.duration} хв.)`;
    }
};

let playlist = [];

function createSong(name, duration) {
    let song = Object.create(BaseSong);
    song.name = name;
    song.duration = duration;
    return song;
}

document.getElementById("addSong").addEventListener("click", function() {
    let name = document.getElementById("songName").value.trim();
    let duration = parseFloat(document.getElementById("songDuration").value);

    if (name === "" || isNaN(duration) || duration <= 0) {
        alert("Введіть коректну назву та тривалість!");
        return;
    }

    playlist.push(createSong(name, duration));
    updatePlaylist();

    document.getElementById("songName").value = "";
    document.getElementById("songDuration").value = "";
});

function updatePlaylist() {
    let list = document.getElementById("playlist");
    list.innerHTML = "";

    playlist.forEach((song, index) => {
        let li = document.createElement("li");
        li.textContent = song.getInfo();

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", () => {
            playlist.splice(index, 1);
            updatePlaylist();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

document.getElementById("sortByName").addEventListener("click", function() {
    playlist.sort((a, b) => a.name.localeCompare(b.name));
    updatePlaylist();
});

document.getElementById("sortByDuration").addEventListener("click", function() {
    playlist.sort((a, b) => a.duration - b.duration);
    updatePlaylist();
});

document.getElementById("calculateTotal").addEventListener("click", function() {
    let total = playlist.reduce((sum, song) => sum + song.duration, 0);
    document.getElementById("totalTime").textContent = total;
});

document.getElementById("searchSong").addEventListener("input", function() {
    let searchText = this.value.toLowerCase();
    let filteredPlaylist = playlist.filter(song => song.name.toLowerCase().includes(searchText));

    let list = document.getElementById("playlist");
    list.innerHTML = "";

    filteredPlaylist.forEach((song, index) => {
        let li = document.createElement("li");
        li.textContent = song.getInfo();

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete");
        deleteBtn.addEventListener("click", () => {
            let originalIndex = playlist.indexOf(song);
            playlist.splice(originalIndex, 1);
            updatePlaylist();
        });

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
});

document.getElementById("clearPlaylist").addEventListener("click", function() {
    playlist = [];
    updatePlaylist();
    document.getElementById("totalTime").textContent = "0";
});
