document.addEventListener('DOMContentLoaded', () => {
    const maskForm = document.getElementById('maskForm');
    const maskCards = document.getElementById('maskCards');

    maskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const maskColorInput = document.getElementById('maskColor');
        const name = nameInput.value.trim();
        const maskColor = maskColorInput.value;

        const maskCard = document.createElement('div');
        maskCard.classList.add('mask');
        maskCard.style.backgroundColor = maskColor;
        maskCard.textContent = name;

        maskCards.appendChild(maskCard);

        maskForm.reset();
    });
});
