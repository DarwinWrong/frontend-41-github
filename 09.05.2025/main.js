const form = document.getElementById('postForm')
const titleInput = document.getElementById('title')
const bodyInput = document.getElementById('body')
const postsContainer = document.getElementById('postsContainer')
let editingPostId = null

async function loadPosts() {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)
        const posts = await response.json()
        postsContainer.innerHTML = ''
        posts.forEach(post => renderPost(post))
    } catch (err){
        showError("Помилка завантаження постів: " + err.message)
    }
}

function renderPost(post) {
    const postDiv = document.createElement('div')
    postDiv.className = 'post'
  
    const titleEl = document.createElement('h3')
    titleEl.textContent = post.title
  
    const bodyEl = document.createElement('p')
    bodyEl.textContent = post.body
  
    const actionsDiv = document.createElement('div')
    actionsDiv.className = 'post-actions'
  
    const editBtn = document.createElement('button')
    editBtn.textContent = 'Редагувати'
    editBtn.onclick = () => editPost(post)
  
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Видалити'
    deleteBtn.onclick = () => deletePost(post.id, postDiv)
  
    actionsDiv.append(editBtn, deleteBtn)
    postDiv.append(titleEl, bodyEl, actionsDiv)
    postsContainer.appendChild(postDiv)
  }

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const title = titleInput.value.trim()
    const body = bodyInput.value.trim()

    if (!title || !body) return

    try {
        if (editingPostId) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${editingPostId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, body })
            })
            const updatedPost = await response.json();
            updatePostInDOM(updatedPost)
            editingPostId = null;
        } else {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, body })
            })
            const newPost = await response.json()
            renderPost(newPost)
        }
        form.reset();
    } catch (err) {
        showError("Помилка при збереженні поста: " + err.message)
    }
})

function editPost(post) {
    titleInput.value = post.title
    bodyInput.value = post.body
    editingPostId = post.id
  }
  
  async function deletePost(id, element) {
    try {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
            { method: 'DELETE' })
      element.remove()
    } catch (err) {
      showError("Помилка видалення поста: " + err.message)
    }
  }

  function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    document.body.prepend(errorDiv);
    setTimeout(() => errorDiv.remove(), 4000);
  }

  loadPosts();