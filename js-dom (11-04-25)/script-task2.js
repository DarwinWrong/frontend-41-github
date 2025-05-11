const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

const currentImg = document.getElementById('current');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');

let index = 0;

function updateGallery() {
  currentImg.src = images[index];
  backBtn.disabled = index === 0;
  forwardBtn.disabled = index === images.length - 1;
}

backBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    updateGallery();
  }
});

forwardBtn.addEventListener('click', () => {
  if (index < images.length - 1) {
    index++;
    updateGallery();
  }
});

updateGallery();
