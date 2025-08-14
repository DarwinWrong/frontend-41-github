const allUsersDiv = document.getElementById("allUsers");
const searchInput = document.getElementById("searchInput");

let usersData = [];
async function fetchUsers() {
  try {
    const res = await fetch(
      "https://akabab.github.io/starwars-api/api/all.json"
    );
    usersData = await res.json();
    renderUsers(usersData);
  } catch (err) {
    console.error("Error fetching users:", err);
  }
}
function renderUsers(users) {
  allUsersDiv.innerHTML = " ";
  users.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("user");
    userDiv.style.backgroundColor = `${user.eyeColor}`;
    if (userDiv.style.backgroundColor === "black") {
      userDiv.style.color = "white";
    }
    userDiv.innerHTML = `
      <p>${user.name}</p>
      <p>Gender: <span>${user.gender}</span></p>
      <hr />
      <p>Species: <span>${user.species || "unknown"}</span></p>
    `;
    allUsersDiv.appendChild(userDiv);
  });
}

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = usersData.filter((user) =>
    Object.values(user).some((val) => String(val).toLowerCase().includes(value))
  );
  renderUsers(filtered);
});
fetchUsers();
