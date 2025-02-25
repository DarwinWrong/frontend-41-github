document.getElementById("maskForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const color = document.getElementById('color').value;

    const mask = document.createElement('div');
    mask.classList.add('mask');
    mask.textContent = `Маска для ${name}`;
    mask.style.backgroundColor = color;

    document.getElementById('container').appendChild(mask);
    document.getElementById('maskForm').reset();
});