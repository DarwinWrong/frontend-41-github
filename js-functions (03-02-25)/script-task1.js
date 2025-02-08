const heroes = [
    { name: 'Superman', power: 95 },
    { name: 'Batman', power: 85 },
    { name: 'Spider Man', power: 60 },
    { name: 'Flash', power: 45 },
    { name: 'Green Lantern', power: 55 },
    { name: 'Nightwing', power: 40 },
    { name: 'Cyborg', power: 50 }
];

function filterHeroes(heroesArray) {
    return heroesArray.filter(hero => hero.power > 50);
}

function createHeroList(heroesArray) {
    const ul = document.createElement('ul');

    heroesArray.forEach(hero => {
        const li = document.createElement('li');
        li.textContent = `${hero.name} (Power: ${hero.power})`;
        ul.appendChild(li);
    });

    return ul;
}

function displayHeroes() {
    const selectedHeroes = filterHeroes(heroes);

    const heroListDiv = document.getElementById('hero-list');

    heroListDiv.innerHTML = '';

    const heroList = createHeroList(selectedHeroes);
    heroListDiv.appendChild(heroList);
}

document.addEventListener('DOMContentLoaded', displayHeroes);
