(function () {
  const accordion = document.getElementById('myAccordion');
  const headers = accordion.querySelectorAll('.header');

  headers.forEach((header) => {
    header.addEventListener('click', () => {
      const currentlyActive = accordion.querySelector('.content.active');
      if (currentlyActive && currentlyActive !== header.nextElementSibling) {
        currentlyActive.classList.remove('active');
      }

      const content = header.nextElementSibling;
      content.classList.toggle('active');
    });
  });
})();
