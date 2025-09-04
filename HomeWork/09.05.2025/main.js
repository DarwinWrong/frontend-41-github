// main.js

const API_URL = "https://jsonplaceholder.typicode.com/posts";
const postsContainer = document.getElementById("postsCont");
const sendPostBtn = document.getElementById("sendPost");
const postTitle = document.getElementById("postTitle");
const postText = document.getElementById("postText");

function showMessage(message, type = "error") {
  const msg = document.createElement("div");
  msg.textContent = message;
  msg.className = type === "error" ? "error" : "success";
  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 3000);
}

async function fetchPosts() {
  postsContainer.innerHTML = "<p>Завантаження...</p>";
  try {
    const res = await fetch(`${API_URL}?_limit=10`);
    if (!res.ok) throw new Error("Не вдалося отримати пости");

    const posts = await res.json();
    renderPosts(posts);
  } catch (err) {
    showMessage(err.message);
    postsContainer.innerHTML = "";
  }
}

function renderPosts(posts) {
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    const postEl = document.createElement("div");
    postEl.className = "post";
    postEl.dataset.id = post.id;

    postEl.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      <button class="edit">Редагувати</button>
      <button class="delete">Видалити</button>
    `;

    postsContainer.appendChild(postEl);
  });
}

async function createPost() {
  const title = postTitle.value.trim();
  const body = postText.value.trim();

  if (!title || !body) {
    showMessage("Заповніть всі поля!");
    return;
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body, userId: 1 }),
    });

    if (!res.ok) throw new Error("Не вдалося створити пост");

    const newPost = await res.json();

    renderPosts(
      [newPost, ...postsContainer.querySelectorAll(".post")].map((p) =>
        p instanceof HTMLElement
          ? {
              id: p.dataset.id,
              title: p.querySelector("h3").textContent,
              body: p.querySelector("p").textContent,
            }
          : p
      )
    );

    postTitle.value = "";
    postText.value = "";
    showMessage("Пост створено!", "success");
  } catch (err) {
    showMessage(err.message);
  }
}

async function updatePost(id, title, body) {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, title, body, userId: 1 }),
    });

    if (!res.ok) throw new Error("Не вдалося оновити пост");

    const updatedPost = await res.json();

    const postEl = postsContainer.querySelector(`[data-id='${id}']`);
    if (postEl) {
      postEl.querySelector("h3").textContent = updatedPost.title;
      postEl.querySelector("p").textContent = updatedPost.body;
    }

    showMessage("Пост оновлено!", "success");
  } catch (err) {
    showMessage(err.message);
  }
}

async function deletePost(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Не вдалося видалити пост");

    const postEl = postsContainer.querySelector(`[data-id='${id}']`);
    if (postEl) postEl.remove();

    showMessage("Пост видалено!", "success");
  } catch (err) {
    showMessage(err.message);
  }
}

postsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const id = e.target.closest(".post").dataset.id;
    deletePost(id);
  }

  if (e.target.classList.contains("edit")) {
    const postEl = e.target.closest(".post");
    const id = postEl.dataset.id;
    const title = postEl.querySelector("h3").textContent;
    const body = postEl.querySelector("p").textContent;

    postEl.innerHTML = `
      <input type="text" class="edit-title" value="${title}" />
      <textarea class="edit-body">${body}</textarea>
      <button class="save">Оновити</button>
      <button class="cancel">Скасувати</button>
    `;

    postEl.querySelector(".save").addEventListener("click", () => {
      const newTitle = postEl.querySelector(".edit-title").value;
      const newBody = postEl.querySelector(".edit-body").value;
      updatePost(id, newTitle, newBody);
    });

    postEl.querySelector(".cancel").addEventListener("click", () => {
      renderPosts(
        [...postsContainer.querySelectorAll(".post")].map((p) => ({
          id: p.dataset.id,
          title:
            p.querySelector(".edit-title")?.value ||
            p.querySelector("h3")?.textContent,
          body:
            p.querySelector(".edit-body")?.value ||
            p.querySelector("p")?.textContent,
        }))
      );
    });
  }
});

sendPostBtn.addEventListener("click", createPost);

fetchPosts();
