const API_ADDRESS = 'https://akabab.github.io/starwars-api/api/all.json';
const dataList = document.getElementById('data');
const modal = document.getElementById('modal-window');
const modalContent = document.getElementById('modal-content');
 const searchInput = document.getElementById('search');

let characters = [];

fetch(API_ADDRESS)
    .then(res => res.json())
    .then(data => {
        characters = data;
        displayCharacters(data);
    });

function displayCharacters(list) {
    dataList.innerHTML = '';
    list.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = `
      <img src="${element.image}" alt="${element.name}">
      <h4>${element.name}</h4>
    `;
        li.addEventListener('click', () => openModal(element));
        dataList.appendChild(li);
    });
}

function openModal(element) {
    modalContent.innerHTML = `
    <span class="modal-close">&times;</span>
    <img src="${element.image}" alt="${element.name}">
    <h2>${element.name}</h2>
    <p>Gender ${element.gender}</p>
    <p>Species ${element.species}</p>
    <p>Homeworld ${element.homeworld}</p>`
    modal.style.display = 'flex';

     modalContent.querySelector('.modal-close').onclick = () => {
         modal.style.display = 'none';
         modal.style.cursor = 'pointer'
      };
}

window.onclick = event => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}


searchInput.addEventListener('input', event => {
    const value = event.target.value.toLowerCase();
    const filtered = characters.filter(character => {
        return character.name.toLowerCase().includes(value)
    })
    displayCharacters(filtered);
})