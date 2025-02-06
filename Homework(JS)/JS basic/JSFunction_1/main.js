// Choose hero

// const heros = [
//     {name: 'Vlad', power: 30},
//     {name: 'Vova', power: 70},
//     {name: 'Valera', power: 60},
//     {name: 'Andriy', power: 100}
// ];
//
// const allowedHero = [];
//
// const printHero = (hero) => {
//     const container = document.getElementById("hero-list");
//     let hero_item;
//     for (let i = 0; i < hero.length; i++) {
//         hero_item = document.createElement("li");
//         hero_item.textContent = hero[i].name;
//         container.appendChild(hero_item);
//     }
// }
//
// const chooseHero = () => {
//     for (let i = 0; i < heros.length; i++) {
//         if (heros[i].power > 50) {
//             allowedHero.push(heros[i]);
//         }
//     }
//     printHero(allowedHero);
// };
//
// chooseHero();


//Party

const partyCard = () => {
    let name = document.getElementById("name").value;
    let color = document.getElementById("color").value;
    let parent = document.querySelector("body");

    if (name === "" || color === "") {
        alert("Введіть текст!");
    }else{
        let div = document.createElement("mask");
        console.log(name)
        div.textContent = name;
        div.style.backgroundColor = color;
        div.style.width = "200px";
        div.style.height = "200px";
        div.style.padding = "10px";
        div.style.margin = "10px";
        parent.appendChild(div);
    }
};