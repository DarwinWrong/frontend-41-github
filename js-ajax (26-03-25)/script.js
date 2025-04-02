let allCharacters = [];
const API_URL = 'https://akabab.github.io/starwars-api/api/all.json';

document.addEventListener('DOMContentLoaded', function () {
  const charactersContainer = document.getElementById('charactersContainer');
  const searchInput = document.getElementById('searchInput');
  const searchParam = document.getElementById('searchParam');
  const modal = document.getElementById('characterModal');
  const closeModal = document.getElementById('closeModal');
  const modalContent = document.getElementById('modalContent');

  async function fetchCharacters() {
    try {
      charactersContainer.innerHTML =
        '<div class="loader">Loading characters...</div>';

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      allCharacters = await response.json();
      displayCharacters(allCharacters);
    } catch (error) {
      console.error('Error fetching data:', error);
      charactersContainer.innerHTML =
        '<div class="error">Failed to load characters. Please try again later.</div>';
    }
  }

  function displayCharacters(characters) {
    charactersContainer.innerHTML = '';

    if (characters.length === 0) {
      charactersContainer.innerHTML =
        '<div class="error">No characters found matching your search.</div>';
      return;
    }

    characters.forEach((character) => {
      const card = document.createElement('div');
      card.className = 'character-card';

      card.dataset.id = character.id;

      const img = document.createElement('img');
      img.className = 'character-image';
      img.src = character.image;
      img.alt = character.name;
      img.onerror = function () {
        this.src = 'https://via.placeholder.com/250x250?text=No+Image';
      };

      const infoDiv = document.createElement('div');
      infoDiv.className = 'character-info';

      const nameEl = document.createElement('h3');
      nameEl.className = 'character-name';
      nameEl.textContent = character.name;

      const speciesEl = document.createElement('p');
      speciesEl.className = 'character-species';
      speciesEl.textContent = character.species || 'Unknown species';

      infoDiv.appendChild(nameEl);
      infoDiv.appendChild(speciesEl);
      card.appendChild(img);
      card.appendChild(infoDiv);

      card.addEventListener('click', function () {
        const id = this.dataset.id;
        const characterData = allCharacters.find((c) => c.id == id);
        if (characterData) {
          showCharacterModal(characterData);
        } else {
          console.error('No character data available for id:', id);
        }
      });

      charactersContainer.appendChild(card);
    });
  }

  function filterCharacters() {
    const searchTerm = searchInput.value.toLowerCase();
    const parameter = searchParam.value;

    if (searchTerm === '') {
      displayCharacters(allCharacters);
      return;
    }

    const filteredCharacters = allCharacters.filter((character) => {
      if (!parameter.includes('.')) {
        if (character[parameter] === undefined) return false;

        if (parameter === 'gender') {
          return String(character.gender).toLowerCase() === searchTerm;
        }
        return String(character[parameter]).toLowerCase().includes(searchTerm);
      }

      const props = parameter.split('.');
      let value = character;
      for (const prop of props) {
        if (value === undefined || value[prop] === undefined) return false;
        value = value[prop];
      }
      return String(value).toLowerCase().includes(searchTerm);
    });

    displayCharacters(filteredCharacters);
  }

  function showCharacterModal(character) {
    console.log('Showing modal for character:', character.name);

    let detailsHtml = '';

    const baseDetails = [
      {
        label: 'Height',
        value: character.height ? `${character.height} cm` : 'Unknown',
      },
      {
        label: 'Mass',
        value: character.mass ? `${character.mass} kg` : 'Unknown',
      },
      { label: 'Gender', value: character.gender || 'Unknown' },
      { label: 'Hair Color', value: character.hairColor || 'Unknown' },
      { label: 'Skin Color', value: character.skinColor || 'Unknown' },
      { label: 'Eye Color', value: character.eyeColor || 'Unknown' },
      { label: 'Birth Year', value: character.born || 'Unknown' },
      { label: 'Homeworld', value: character.homeworld || 'Unknown' },
      { label: 'Species', value: character.species || 'Unknown' },
    ];

    baseDetails.forEach((detail) => {
      detailsHtml += `
                <div class="detail-item">
                    <span class="detail-label">${detail.label}:</span>
                    <span>${detail.value}</span>
                </div>
            `;
    });

    if (
      Array.isArray(character.affiliations) &&
      character.affiliations.length > 0
    ) {
      detailsHtml +=
        '<div class="detail-item" style="grid-column: 1 / -1;"><span class="detail-label">Affiliations:</span></div>';
      detailsHtml += '<ul style="grid-column: 1 / -1; margin-top: 0;">';
      character.affiliations.forEach((affiliation) => {
        detailsHtml += `<li>${affiliation}</li>`;
      });
      detailsHtml += '</ul>';
    }

    if (Array.isArray(character.masters) && character.masters.length > 0) {
      detailsHtml +=
        '<div class="detail-item" style="grid-column: 1 / -1;"><span class="detail-label">Masters:</span></div>';
      detailsHtml += '<ul style="grid-column: 1 / -1; margin-top: 0;">';
      character.masters.forEach((master) => {
        detailsHtml += `<li>${master}</li>`;
      });
      detailsHtml += '</ul>';
    }

    if (
      Array.isArray(character.apprentices) &&
      character.apprentices.length > 0
    ) {
      detailsHtml +=
        '<div class="detail-item" style="grid-column: 1 / -1;"><span class="detail-label">Apprentices:</span></div>';
      detailsHtml += '<ul style="grid-column: 1 / -1; margin-top: 0;">';
      character.apprentices.forEach((apprentice) => {
        detailsHtml += `<li>${apprentice}</li>`;
      });
      detailsHtml += '</ul>';
    }

    const modalContentHtml = `
            <div class="modal-header">
                <img src="${character.image}" alt="${character.name}" class="modal-image" onerror="this.src='https://via.placeholder.com/120x120?text=No+Image'">
                <h2 class="modal-name">${character.name}</h2>
            </div>
            <div class="modal-details">
                ${detailsHtml}
            </div>
        `;

    modalContent.innerHTML = modalContentHtml;
    modal.style.display = 'block';
  }

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  searchInput.addEventListener('input', filterCharacters);
  searchParam.addEventListener('change', filterCharacters);

  fetchCharacters();
});
