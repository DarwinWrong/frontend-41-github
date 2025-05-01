const usernameInput = document.getElementById('username');

usernameInput.addEventListener('input', () => {
  usernameInput.value = usernameInput.value.replace(/\d/g, '');
});

const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

const field = document.getElementById('field');
const ball = document.getElementById('ball');

field.addEventListener('click', (event) => {
  const fieldRect = field.getBoundingClientRect();
  const ballSize = 100;

  let x = event.clientX - fieldRect.left - ballSize / 2;
  let y = event.clientY - fieldRect.top - ballSize / 2;

  x = Math.max(0, Math.min(x, field.clientWidth - ballSize));
  y = Math.max(0, Math.min(y, field.clientHeight - ballSize));

  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
});

const lights = document.querySelectorAll('.light');
let currentLightIndex = 0;

const switchButton = document.getElementById('switchLight');

switchButton.addEventListener('click', () => {
  lights.forEach(light => light.classList.remove('active'));
  lights[currentLightIndex].classList.add('active');
  currentLightIndex = (currentLightIndex + 1) % lights.length;
});

const bookList = document.getElementById('bookList');
let selectedBook = null;

bookList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    if (selectedBook) {
      selectedBook.style.backgroundColor = '';
    }
    selectedBook = event.target;
    selectedBook.style.backgroundColor = 'orange';
  }
});

const tooltipButtons = document.querySelectorAll('.tooltip-btn');

tooltipButtons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    const tooltipText = button.dataset.tooltip;

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = tooltipText;
    button.appendChild(tooltip);

    tooltip.classList.add('top');

    const rect = tooltip.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const topOverflow = buttonRect.top - rect.height;
    if (topOverflow < 0) {
      tooltip.classList.remove('top');
      tooltip.classList.add('bottom');
    }
  });

  button.addEventListener('mouseleave', () => {
    const tooltip = button.querySelector('.tooltip');
    if (tooltip) tooltip.remove();
  });
});