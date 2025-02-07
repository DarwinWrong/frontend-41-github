document.addEventListener("DOMContentLoaded", () => {
   
    const heroes = [
        { name: "Супермен", power: 90 },
        { name: "Бетмен", power: 45 },
        { name: "Флеш", power: 80 },
        { name: "Аквамен", power: 30 },
        { name: "Жінка-кішка", power: 70 },
        { name: "Халк", power: 100 }
    ];

    function filterHeroes(heroes) {
        return heroes.filter(hero => hero.power > 50);
    }

    function displayHeroes(heroList) {
        const heroDiv = document.getElementById("hero-list");
        heroDiv.innerHTML = "<h3>Відібрані супергерої:</h3>";

        heroList.forEach(hero => {
            const div = document.createElement("div");
            div.classList.add("hero");
            div.textContent = `${hero.name} - сила: ${hero.power}`;
            heroDiv.appendChild(div);
        });
    }

    displayHeroes(filterHeroes(heroes));

  
    document.getElementById("mask-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const color = document.getElementById("color").value;

        const maskDiv = document.createElement("div");
        maskDiv.classList.add("mask");
        maskDiv.textContent = `Маска для: ${name}`;
        maskDiv.style.backgroundColor = color;

        document.getElementById("mask-container").appendChild(maskDiv);
        this.reset();
    });
});
