
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue");

slider.addEventListener("input", () => {
  sliderValue.textContent = slider.value;
});

const images = [
  "images/img_one.png",
  "images/img_two.png",
  "images/img_three.png"
];
let current = 0;

const galleryImage = document.getElementById("galleryImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function updateGallery() {
  galleryImage.src = images[current];
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === images.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (current > 0) current--;
  updateGallery();
});

nextBtn.addEventListener("click", () => {
  if (current < images.length - 1) current++;
  updateGallery();
});

updateGallery();

const titles = document.querySelectorAll(".accordion-title");

titles.forEach(title => {
  title.addEventListener("click", () => {
    const parent = title.parentElement;
    const currentlyActive = document.querySelector(".accordion-item.active");
    if (currentlyActive && currentlyActive !== parent) {
      currentlyActive.classList.remove("active");
      currentlyActive.querySelector(".accordion-content").style.display = "none";
    }
    parent.classList.toggle("active");
    const content = parent.querySelector(".accordion-content");
    content.style.display = parent.classList.contains("active") ? "block" : "none";
  });
});

const newsData = [
    { title: "Новина 1", text: "Текст новини 1" },
    { title: "Новина 2", text: "Текст новини 2" },
    { title: "Новина 3", text: "Текст новини 3" },
    { title: "Новина 4", text: "Текст новини 4" },
    { title: "Новина 5", text: "Текст новини 5" },
    { title: "Новина 6", text: "Текст новини 6" },
    { title: "Новина 7", text: "Текст новини 7" },
    { title: "Новина 8", text: "Текст новини 8" },
    { title: "Новина 9", text: "Текст новини 9" },
    { title: "Новина 10", text: "Текст новини 10" }
  ];
  
  let newsIndex = 0;
  const newsContainer = document.getElementById('newsContainer');
  
  function loadMoreNews() {
    if (newsIndex < newsData.length) {
      const newsItem = document.createElement('div');
      newsItem.classList.add('news-item');
      newsItem.innerHTML = `
        <div>
          <strong>${newsData[newsIndex].title}</strong>
          <p>${newsData[newsIndex].text}</p>
        </div>
      `;
      newsContainer.appendChild(newsItem);
      newsIndex++;
    }
  }

  for (let i = 0; i < 5; i++) {
    loadMoreNews();
  }
  
  newsContainer.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = newsContainer;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
      loadMoreNews();
    }
  });
