document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
  
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value.trim();
    const birthdate = document.getElementById('birthdate').value;
    const website = document.getElementById('website').value.trim();
  
    let isValid = true;
  
    if (!/^[a-zA-Z0-9]{3,}$/.test(username)) {
      showError('usernameError', 'Ім’я користувача повинне містити ≥3 латинські символи або цифри.');
      isValid = false;
    }
  
    if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      showError('emailError', 'Некоректний email.');
      isValid = false;
    }
  
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
      showError('passwordError', 'Пароль має містити ≥8 символів, 1 велику, 1 малу літеру і 1 цифру.');
      isValid = false;
    }
  
    if (!/^\+380\d{9}$/.test(phone)) {
      showError('phoneError', 'Телефон повинен бути у форматі +380XXXXXXXXX.');
      isValid = false;
    }
  
    const age = calculateAge(birthdate);
    if (isNaN(age) || age < 18) {
      showError('birthdateError', 'Вам повинно бути не менше 18 років.');
      isValid = false;
    }
  
    if (website !== '' && !/^(https?:\/\/)?[\w.-]+\.[a-z]{2,}([\/\w .-]*)*\/?$/.test(website)) {
      showError('websiteError', 'Некоректний URL.');
      isValid = false;
    }
  
    if (isValid) {
      const userData = { username, email, password, phone, birthdate, website };
      console.log('✅ Дані форми:', userData);
      alert('Реєстрація успішна! Дані виведено в консоль.');
    }
  });
  
  function calculateAge(birthdate) {
    const dob = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  }
  
  function showError(id, message) {
    document.getElementById(id).textContent = message;
  }
  
  function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
  }
  
  document.getElementById('showPassword').addEventListener('change', function () {
    const pwd = document.getElementById('password');
    pwd.type = this.checked ? 'text' : 'password';
  });
  
  document.getElementById('password').addEventListener('input', function () {
    document.getElementById('passwordLength').textContent = `Символів: ${this.value.length}`;
  });
  