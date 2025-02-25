const heroes = [
    { name: "Superman", power: 100 },
    { name: "Batman", power: 60 },
    { name: "Flash", power: 40 },
    { name: "Wonder Woman", power: 80 },
    { name: "Green Lantern", power: 45 }
  ];
  
  function filterHeroes(heroes) {
    return heroes.filter(hero => hero.power > 50);
  }
  
  function displayHeroes(heroes) {
    const heroList = document.getElementById("hero-list");
    heroList.innerHTML = "";  
  
    heroes.forEach(hero => {
      const heroItem = document.createElement("div");
      heroItem.textContent = `${hero.name} - Сила: ${hero.power}`;
      heroList.appendChild(heroItem);
    });
  }
  
  const strongHeroes = filterHeroes(heroes);
  displayHeroes(strongHeroes);
  
  
  const form = document.getElementById('mask-form');
  
  form.addEventListener('submit', function(event) {
    event.preventDefault();  
  
    const name = document.getElementById('name').value;  
    const color = document.getElementById('color').value;  
  
    const maskDiv = document.createElement('div');
    maskDiv.classList.add('mask');
    maskDiv.textContent = `${name} - Маска кольору ${color}`;
    maskDiv.style.backgroundColor = color;
  
    const maskContainer = document.getElementById('mask-container');
    maskContainer.appendChild(maskDiv);
  
    form.reset();
  });
  