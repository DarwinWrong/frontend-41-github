const charactersContainer = document.getElementById("characters");
const searchInput = document.getElementById("search");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

let characters = [];

async function fetchCharacters() {
  const response = await fetch("https://akabab.github.io/starwars-api/api/all.json");
  characters = await response.json();
  displayCharacters(characters);
}

function displayCharacters(data) {
  charactersContainer.innerHTML = "";
  data.forEach(char => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${char.name}</h3>
      <img src="${char.image}" alt="${char.name}">
    `;
    card.onclick = () => showModal(char);
    charactersContainer.appendChild(card);
  });
}

function showModal(character) {
  modalBody.innerHTML = `
    <h2>${character.name}</h2>
    <img src="${character.image}">
    <p><strong>Species:</strong> ${character.species}</p>
    <p><strong>Gender:</strong> ${character.gender}</p>
    <p><strong>Height:</strong> ${character.height}</p>
    <p><strong>Mass:</strong> ${character.mass}</p>
    <p><strong>Homeworld:</strong> ${character.homeworld || 'Unknown'}</p>
  `;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = characters.filter(char =>
    Object.values(char).some(val =>
      String(val).toLowerCase().includes(query)
    )
  );
  displayCharacters(filtered);
});

window.onclick = (e) => {
  if (e.target === modal) closeModal();
};

fetchCharacters();
