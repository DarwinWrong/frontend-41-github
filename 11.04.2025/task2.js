const images = [
    'images/image1.jpg',
    'images/image2.jpg'
]
let currentIndex = 0;
const imageElement = document.getElementById('image');
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');

function updateImage() {
    imageElement.src = images[currentIndex];
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === images.length - 1;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--
        updateImage()
    }
})

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++
        updateImage()
    }
})

updateImage()