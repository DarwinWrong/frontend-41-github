const newsItems = Array.from({ length: 100 }, (_, i) => {
  return (
    `News #${
      i + 1
    }: Lorem ipsum dolor sit amet, consectetur adipiscing elit. ` +
    `Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
  );
});

const listEl = document.getElementById('news-list');
const loadingEl = document.getElementById('loading');
let nextIndex = 0;
const initialLoad = 10;
const batchSize = 5;

function appendSync(count) {
  for (let i = 0; i < count && nextIndex < newsItems.length; i++) {
    const li = document.createElement('li');
    li.textContent = newsItems[nextIndex++];
    listEl.appendChild(li);
  }
}

function loadMore() {
  if (nextIndex >= newsItems.length) return;
  loadingEl.style.display = 'block';
  setTimeout(() => {
    appendSync(batchSize);
    loadingEl.style.display = 'none';
  }, 500);
}

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = window.innerHeight;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    loadMore();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  appendSync(initialLoad);
});
