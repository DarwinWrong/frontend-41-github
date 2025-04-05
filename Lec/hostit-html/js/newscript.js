const addMesage = document.getElementById("addedClient");
const haveMesage = document.getElementById("haveMessage");
const sectionMessage = document.getElementById("sectionMessage");
const closeMessage = document.getElementById("closeBTN");
const firstNameInput = document.getElementById("firstName");
const emailInput = document.getElementById("email");
const phone = document.getElementById("phone");
const clientMessageInput = document.getElementById("clientMessage");
const formBtn = document.getElementById("formBtn");
const trueMessage = document.getElementById("addMessage");
const falseMessage = document.getElementById("haveMessage");
const clients = [];
function getClient() {
  const clientExists = clients.some(
    (client) => client.firstName === firstNameInput.value
  );

  if (clientExists) {
    falseMessage.classList.toggle("messageNone");
    trueMessage.classList.toggle("messageNone");
  } else {
    const newClient = {
      firstName: firstNameInput.value,
      email: emailInput.value,
      phone: phone.value,
      message: clientMessageInput.value,
    };
    clients.push(newClient);
    trueMessage.classList.remove("messageNone");
  }

  firstNameInput.value = "";
  emailInput.value = "";
  phone.value = "";
  clientMessageInput.value = "";
  console.log(clients);
}
formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getClient();
});
closeMessage.addEventListener("click", () => {
  sectionMessage.style.display = "none";
});
