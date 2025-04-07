const form = document.getElementById('registrationForm');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    errorMessages.innerHTML = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const birthday = document.getElementById('birthday').value;
    const website = document.getElementById('website').value;
    
    const usernameRegExp = /[a-zA-Z0-9]{3,}/;
    const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const phoneRegExp = /^\+380\d{9}$/;
    const websiteRegExp =/^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/.*)?$/;

    let errors = [];

    if (!usernameRegExp.test(username)) {
        errors.push(`Ім'я користувача має містити мінімум 3 символи і тільки латинські літери та цифри.`);
    }

    if (!emailRegExp.test(email)) {
        errors.push('Введіть коректний email.');
    }

    if (!passwordRegExp.test(password)) {
        errors.push('Пароль має бути мінімум 8 символів, містити хоча б одну літеру у верхньому регістрі, одну у нижньому та одну цифру.');
    }

    if (!phoneRegExp.test(phone)) {
        errors.push('Номер телефону має бути у форматі +380xxxxxxxxx.');
    }
    const birthDate = new Date(birthday);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    if (age < 18 || (age === 18 && new Date().getMonth() < birthDate.getMonth())) {
        errors.push('Вам повинно бути не менше 18 років.');
    }

    if (website && !websiteRegExp.test(website)) {
        errors.push('Введіть коректний URL або залиште поле порожнім.');
    }

    if (errors.length > 0) {
        errors.forEach(error => {
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error;
            errorMessages.appendChild(errorMessage);
        });
    } else {

        const formData = {
            username,
            email,
            password,
            phone,
            birthday,
            website
        };
        console.log(formData);
        alert('Реєстрація успішна!');
    }
});
