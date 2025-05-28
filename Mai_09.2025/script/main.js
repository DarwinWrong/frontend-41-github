const API_URL = 'https://jsonplaceholder.typicode.com/posts';

document.addEventListener('DOMContentLoaded', () => {
  const postForm = document.getElementById('postForm');
  const postsContainer = document.getElementById('postsContainer');
  const loading = document.getElementById('loading');

  fetchPosts();

  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = postForm.title.value.trim();
    const body = postForm.body.value.trim();
    if (!title || !body) return alert('Заповніть всі поля.');

    const newPost = { title, body, userId: 1 };
    try {
      showLoading(true);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      });
      const createdPost = await response.json();
      renderPost(createdPost);
      postForm.reset();
    } catch (err) {
      alert('Помилка створення поста');
    } finally {
      showLoading(false);
    }
  });

  async function fetchPosts() {
    try {
      showLoading(true);
      const res = await fetch(`${API_URL}?_limit=10`);
      const posts = await res.json();
      posts.forEach(renderPost);
    } catch (err) {
      alert('Не вдалося завантажити пости');
    } finally {
      showLoading(false);
    }
  }

  function renderPost(post) {
    const postEl = document.createElement('li');
    postEl.className = 'post';
    postEl.dataset.id = post.id;

    postEl.innerHTML = `
      <h3 contenteditable="false">${post.title}</h3>
      <p contenteditable="false">${post.body}</p>
      <button class="action edit">Редагувати</button>
      <button class="action save hidden">Оновити</button>
      <button class="action delete">Видалити</button>
    `;

    postsContainer.prepend(postEl);
  }

  postsContainer.addEventListener('click', async (e) => {
    const postEl = e.target.closest('.post');
    if (!postEl) return;

    const id = postEl.dataset.id;
    const titleEl = postEl.querySelector('h3');
    const bodyEl = postEl.querySelector('p');

    if (e.target.classList.contains('edit')) {
      titleEl.contentEditable = bodyEl.contentEditable = true;
      toggleButtons(postEl, true);
    }

    if (e.target.classList.contains('save')) {
      const newTitle = titleEl.textContent.trim();
      const newBody = bodyEl.textContent.trim();
      if (!newTitle || !newBody) return alert('Поля не можуть бути порожні');

      try {
        showLoading(true);
        await fetch(`${API_URL}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: newTitle, body: newBody }),
        });
        titleEl.contentEditable = bodyEl.contentEditable = false;
        toggleButtons(postEl, false);
      } catch (err) {
        alert('Помилка оновлення поста');
      } finally {
        showLoading(false);
      }
    }

    if (e.target.classList.contains('delete')) {
      try {
        showLoading(true);
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        postEl.remove();
      } catch (err) {
        alert('Помилка видалення поста');
      } finally {
        showLoading(false);
      }
    }
  });

  function toggleButtons(postEl, editing) {
    postEl.querySelector('.edit').classList.toggle('hidden', editing);
    postEl.querySelector('.save').classList.toggle('hidden', !editing);
  }

  function showLoading(show) {
    loading.classList.toggle('hidden', !show);
  }
});
