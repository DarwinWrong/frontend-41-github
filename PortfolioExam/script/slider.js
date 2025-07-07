document.addEventListener('DOMContentLoaded', () => {
    const portfolioRow = document.querySelector('.portfolio-row');
    const slideLeftBtn = document.getElementById('slide-left');
    const slideRightBtn = document.getElementById('slide-right');
    const scrollAmount = 300;

    if (slideLeftBtn && slideRightBtn) {
        slideLeftBtn.addEventListener('click', () => {
            portfolioRow.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        slideRightBtn.addEventListener('click', () => {
            portfolioRow.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }

    const filterButtons = document.querySelectorAll('.portfolio-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (filter === 'all' || itemCategory === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            portfolioRow.scrollTo({ left: 0, behavior: 'smooth' });
        });
    });
});
