const form = document.querySelector("form");
const firstNameInput = form.querySelector("#firstName");
const lastNameInput = form.querySelector("#lastName");
const emailInput = form.querySelector("#email");
const passwordInput = form.querySelector("#password");
const confirmPasswordInput = form.querySelector("#confirPassword");
const nameRegexp = /^[A-Z][a-z]{1,29}$/;
const emailRegexp = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passwordRegexp =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@$%^&*()_+])[A-Za-z\d!@$%^&*()_+]{0,8}$/;
const validateField = (input, regex) => {
  if (!regex.tesr(input.value)) {
    input.setCustomValidity("Invalid input");
  } else {
    input.setCustomValidity("");
  }
};
const checkPassword = () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.setCustomValidity("Uncorect");
  }
};
