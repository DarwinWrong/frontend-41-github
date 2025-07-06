// Burger Menu Functionality
function initBurgerMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
  
  document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
}

// Typing Text Effect 
function initTypingEffect() {
  const roles = [
    "Web Designer",
    "UI / UX Designer",
    "Web Developer",
    "Software Tester"
  ];

  const typingText = document.getElementById("typing-text");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingText.textContent = currentRole.slice(0, charIndex);

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// Download CV Buttons 
function initDownloadButtons() {
  const viewBtn = document.getElementById("viewBtn");
  const downloadBtnContainer = document.getElementById("downloadBtn");

  viewBtn.addEventListener("click", e => {
    e.preventDefault();
    window.open(viewBtn.href, "_blank");
  });

  const downloadBtn = downloadBtnContainer.querySelector("button");
  downloadBtn.addEventListener("click", e => {
    e.preventDefault();

    const link = document.createElement("a");
    link.href = downloadBtnContainer.href;
    link.download = "CV-Oleh_Lobach.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// Testimonials Slider 
function initTestimonialsSlider() {
  const reviewsWrapper = document.querySelector('.reviews-wrapper');
  const btnLeft = document.querySelector('.arrow.left');
  const btnRight = document.querySelector('.arrow.right');

  function getReviewWidth() {
    const review = document.querySelector('.review');
    if (!review) return 0;
    const style = getComputedStyle(review);
    const width = review.offsetWidth;
    const marginRight = parseFloat(style.marginRight) || 0;
    return width + marginRight;
  }

  let currentIndex = 0;

  function updateSlider(direction = '') {
    const reviewWidth = getReviewWidth();
    const reviews = document.querySelectorAll('.review');
    const maxIndex = reviews.length - 1;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    if (direction === 'left') {
      reviewsWrapper.classList.add('slide-left');
    } else if (direction === 'right') {
      reviewsWrapper.classList.add('slide-right');
    }

    const offset = -reviewWidth * currentIndex;
    reviewsWrapper.style.transform = `translateX(${offset}px)`;

    setTimeout(() => {
      reviewsWrapper.classList.remove('slide-left', 'slide-right');
    }, 500);
  }

  btnRight.addEventListener('click', () => {
    const reviews = document.querySelectorAll('.review');
    if (currentIndex < reviews.length - 1) {
      currentIndex++;
      updateSlider('left');
    }
  });

  btnLeft.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider('right');
    }
  });

  window.addEventListener('resize', () => updateSlider());

  updateSlider();

  return {
    updateSlider: () => {
      currentIndex = 0;
      updateSlider();
    }
  };
}

function initReviewModal() {
  const openBtn = document.getElementById('openReviewBtn');
  const modal = document.getElementById('reviewModal');
  const closeBtn = document.getElementById('closeModal');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

function createReviewElement(author, text, rating) {
  const newReview = document.createElement('div');
  newReview.classList.add('review');

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=007bff&color=fff&size=50`;

  newReview.innerHTML = `
    <img src="${avatarUrl}" alt="${author}">
    <p><strong>${author}:</strong> ${text}</p>
    <p>${'⭐'.repeat(rating)}</p>
  `;
  return newReview;
}

function loadReviewsFromStorage(container) {
  const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
  storedReviews.forEach(({ author, text, rating }) => {
    const reviewEl = createReviewElement(author, text, rating);
    container.appendChild(reviewEl);
  });
}

function saveReviewToStorage(author, text, rating) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.unshift({ author, text, rating });
  localStorage.setItem('reviews', JSON.stringify(reviews));
}

function initAddReview(slider) {
  const reviewsWrapper = document.getElementById('reviews');
  const authorInput = document.getElementById('reviewAuthor');
  const textInput = document.getElementById('reviewText');
  const ratingSelect = document.getElementById('reviewRating');
  const addReviewBtn = document.querySelector('.modal-content button');

  loadReviewsFromStorage(reviewsWrapper);

  addReviewBtn.addEventListener('click', () => {
    const author = authorInput.value.trim();
    const text = textInput.value.trim();
    const rating = ratingSelect.value;

    if (!author || !text) {
      alert('Будь ласка, заповніть ім\'я і текст відгуку.');
      return;
    }

    const newReview = createReviewElement(author, text, rating);
    reviewsWrapper.prepend(newReview);
    saveReviewToStorage(author, text, rating);

    authorInput.value = '';
    textInput.value = '';
    ratingSelect.value = '5';
    document.getElementById('reviewModal').style.display = 'none';

    setTimeout(() => {
      slider.updateSlider();
    }, 100);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  initTypingEffect();
  initDownloadButtons();

  const slider = initTestimonialsSlider();
  initReviewModal();
  initAddReview(slider);
});

// Modal window and Contact Form
function showCustomAlert(message) {
  const alertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('custom-alert-message');
  alertMessage.textContent = message;
  alertBox.classList.remove('hidden');
}

function closeCustomAlert() {
  const alertBox = document.getElementById('custom-alert');
  alertBox.classList.add('hidden');
}

const form = document.getElementById('contact-form');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xqabjwrr", {
      method: "POST",
      headers: {
        Accept: "application/json"
      },
      body: formData
    });

    if (response.ok) {
      showCustomAlert("Ваше повідомлення успішно надіслано!");
      form.reset();
    } else {
      showCustomAlert("Сталася помилка при надсиланні. Спробуйте ще раз.");
    }
  } catch (error) {
    showCustomAlert("Сталася помилка з'єднання. Перевірте інтернет.");
  }
});