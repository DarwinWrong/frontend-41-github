const api = 'https://jsonplaceholder.typicode.com/posts';
const form = document.getElementById('postForm');
const titleEl = document.getElementById('title');
const bodyEl = document.getElementById('body');
const submitBtn = document.getElementById('submitBtn');
const list = document.getElementById('list');
const alertBox = document.getElementById('alert');

function showError(message) {
  const div = document.createElement('div');
  div.className = 'error';
  div.textContent = message;
  alertBox.append(div);
  setTimeout(() => div.remove(), 5000);
}

function createCard(post) {
  const div = document.createElement('div');
  div.className = 'post';
  div.dataset.id = post.id;
  div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    <div class="actions">
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  `;
  return div;
}

async function loadPosts() {
  try {
    const res = await fetch(`${api}?_limit=10`);
    if (!res.ok) throw new Error('Failed to fetch posts');
    const data = await res.json();
    data.forEach((p) => list.append(createCard(p)));
  } catch (err) {
    showError(err.message);
  }
}

async function addPost(post) {
  try {
    const res = await fetch(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    if (!res.ok) throw new Error('Failed to create post');
    const data = await res.json();
    list.prepend(createCard(data));
  } catch (err) {
    showError(err.message);
  }
}

async function editPost(id, post, card) {
  try {
    const res = await fetch(`${api}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    });
    if (!res.ok) throw new Error('Failed to update post');
    const data = await res.json();
    card.querySelector('h3').textContent = data.title;
    card.querySelector('p').textContent = data.body;
  } catch (err) {
    showError(err.message);
  }
}

async function removePost(id, card) {
  try {
    const res = await fetch(`${api}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Failed to delete post');
    card.remove();
  } catch (err) {
    showError(err.message);
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const mode = submitBtn.textContent.startsWith('Update') ? 'update' : 'create';
  const post = {
    title: titleEl.value.trim(),
    body: bodyEl.value.trim(),
    userId: 1,
  };

  if (mode === 'create') {
    await addPost(post);
  } else {
    const id = form.dataset.editId;
    const card = document.querySelector(`.post[data-id="${id}"]`);
    await editPost(id, post, card);
    submitBtn.textContent = 'Create post';
    delete form.dataset.editId;
  }

  form.reset();
});

list.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const card = btn.closest('.post');
  const id = card.dataset.id;

  if (btn.classList.contains('edit')) {
    titleEl.value = card.querySelector('h3').textContent;
    bodyEl.value = card.querySelector('p').textContent;
    submitBtn.textContent = 'Update';
    form.dataset.editId = id;
    titleEl.focus();
  }

  if (btn.classList.contains('delete')) {
    removePost(id, card);
  }
});

loadPosts();
