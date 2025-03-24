const BaseSong = {
  getInfo: function () {
    return `${this.name} - ${this.duration} minutes`;
  },
};

function createSong(name, duration) {
  const song = Object.create(BaseSong);
  song.name = name;
  song.duration = parseFloat(duration);
  return song;
}

let playlist = [];

const songTitleInput = document.getElementById('songTitle');
const songDurationInput = document.getElementById('songDuration');
const addSongBtn = document.getElementById('addSongBtn');
const playlistUL = document.getElementById('playlist');
const sortTitleBtn = document.getElementById('sortTitleBtn');
const sortDurationBtn = document.getElementById('sortDurationBtn');
const calcTotalBtn = document.getElementById('calcTotalBtn');
const totalTimeDisplay = document.getElementById('totalTime');

function updatePlaylist() {
  playlistUL.innerHTML = '';

  playlist.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = song.getInfo();

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.addEventListener('click', () => {
      playlist.splice(index, 1);
      updatePlaylist();
    });

    li.appendChild(deleteBtn);
    playlistUL.appendChild(li);
  });
}

addSongBtn.addEventListener('click', () => {
  const title = songTitleInput.value.trim();
  const duration = songDurationInput.value.trim();

  if (
    title === '' ||
    duration === '' ||
    isNaN(duration) ||
    parseFloat(duration) <= 0
  ) {
    alert('Please enter a valid song title and a positive duration.');
    return;
  }

  const newSong = createSong(title, duration);
  playlist.push(newSong);
  updatePlaylist();

  songTitleInput.value = '';
  songDurationInput.value = '';
});

sortTitleBtn.addEventListener('click', () => {
  playlist.sort((a, b) => a.name.localeCompare(b.name));
  updatePlaylist();
});

sortDurationBtn.addEventListener('click', () => {
  playlist.sort((a, b) => a.duration - b.duration);
  updatePlaylist();
});

calcTotalBtn.addEventListener('click', () => {
  const totalDuration = playlist.reduce(
    (total, song) => total + song.duration,
    0,
  );
  totalTimeDisplay.textContent = totalDuration;
});
