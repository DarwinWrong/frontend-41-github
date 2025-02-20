const heroes = [
    { name: 'Бетмен', power: 80 },
    { name: 'Флеш', power: 90 },
    { name: 'Кіт у чоботях', power: 40 },
    { name: 'Диво жінка', power: 100 }
];

function filterHeroes(heroes) {
    return heroes.filter(hero => hero.power > 50);
};

function displayHeroes(filteredHeroes) {
    const heroList = document.getElementById('hero-list');
    
    filteredHeroes.forEach(hero => {
        const heroItem = document.createElement('p');
        heroItem.textContent = `${hero.name} - сила ${hero.power}`
        heroList.appendChild(heroItem);
    });
}

displayHeroes(filterHeroes(heroes));