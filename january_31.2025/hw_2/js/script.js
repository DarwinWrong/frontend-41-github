const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', function() {
        this.style.color = 'red';
    });
});

const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'block'; 
    overlay.style.display = 'block'; 
});

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none'; 
    overlay.style.display = 'none'; 
});
