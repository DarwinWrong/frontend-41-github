const intName = document.getElementById("nameSng");
const intTime = document.getElementById("timeSng");
const addSngBtn = document.getElementById("addSNG");
const sortNameBtn = document.getElementById("sortName");
const sortTimeBtn = document.getElementById("sortTime");
const musikList = document.getElementById("musikList");
const allTimeBtn = document.getElementById("allTime");
const findSongBtn = document.getElementById("findBtn");
const intFind = document.getElementById("intFind");
const textBox = document.getElementById("textBox");
const resetBtn = document.getElementById("resetList");
const deleteAllBtn = document.getElementById("deleteAll");
let playlist = [];
const BaseSong = {
  getInfo() {
    return `Пісня ${this.name} - триває ${this.time} хв`;
  },
};

function creatSong(name, time) {
  const song = Object.create(BaseSong);
  song.name = name;
  song.time = parseFloat(time);
  return song;
}

function updatePlaylist() {
  musikList.innerHTML = "";
  playlist.forEach((song, index) => {
    const li = document.createElement("li");
    li.classList.add("margin");
    li.textContent = song.getInfo();

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";
    deleteBtn.addEventListener("click", () => {
      playlist.splice(index, 1);
      console.log(index);

      updatePlaylist();
    });
    li.appendChild(deleteBtn);
    musikList.appendChild(li);
  });
  if (playlist.length === 0) {
    sortNameBtn.classList.add("invis");
    sortTimeBtn.classList.add("invis");
    allTimeBtn.classList.add("invis");
  }
}

addSngBtn.addEventListener("click", () => {
  const name = intName.value;
  const time = Number(intTime.value);
  console.log(name);

  console.log(time);

  if (!name || isNaN(time) || time <= 0) {
    alert("Введіть коректні дані");
    intName.value = "";
    intTime.value = "";
    return;
  }
  const newSong = creatSong(name, time);
  if (
    playlist.some(
      (song) => song.name.toLowerCase() === newSong.name.toLowerCase()
    )
  ) {
    alert("Пісня уже додана");
  } else {
    playlist.push(newSong);
  }
  console.log(playlist.includes(newSong));

  console.log(playlist);

  intName.value = "";
  intTime.value = "";
  sortNameBtn.classList.remove("invis");
  sortTimeBtn.classList.remove("invis");
  allTimeBtn.classList.remove("invis");
  updatePlaylist();
});

sortNameBtn.addEventListener("click", () => {
  playlist.sort((a, b) => a.name.localeCompare(b.name));
  updatePlaylist();
});
sortTimeBtn.addEventListener("click", () => {
  playlist.sort((a, b) => a.time - b.time);
  updatePlaylist();
});
allTimeBtn.addEventListener("click", () => {
  const totalTime = playlist.reduce((sume, song) => sume + song.time, 0);
  textBox.textContent = totalTime;
});
function findSongByName() {
  const songfind = intFind.value.toLowerCase();
  musikList.innerHTML = "";
  playlist
    .filter((song) => song.name.toLowerCase().includes(songfind))
    .forEach((song, index) => {
      const li = document.createElement("li");
      li.classList.add("margin");
      li.textContent = song.getInfo();

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Видалити";
      deleteBtn.addEventListener("click", () => {
        playlist.splice(index, 1);
        console.log(index);

        updatePlaylist();
      });
      li.appendChild(deleteBtn);
      musikList.appendChild(li);
      intFind.value = "";
    });
}
findSongBtn.addEventListener("click", findSongByName);
resetBtn.addEventListener("click", () => {
  updatePlaylist();
  console.log(playlist);
});
deleteAllBtn.addEventListener("click", () => {
  playlist = [];
  updatePlaylist();
});
