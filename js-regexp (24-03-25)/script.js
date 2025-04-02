document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registrationForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((element) => {
      element.style.display = 'none';
      element.textContent = '';
    });

    let isValid = true;
    const formData = {};

    const username = document.getElementById('username').value.trim();
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    if (!usernameRegex.test(username)) {
      document.getElementById('usernameError').textContent =
        'Username must be at least 3 characters and contain only latin letters and numbers.';
      document.getElementById('usernameError').style.display = 'block';
      isValid = false;
    } else {
      formData.username = username;
    }

    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent =
        'Please enter a valid email address.';
      document.getElementById('emailError').style.display = 'block';
      isValid = false;
    } else {
      formData.email = email;
    }

    const password = document.getElementById('password').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById('passwordError').textContent =
        'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.';
      document.getElementById('passwordError').style.display = 'block';
      isValid = false;
    } else {
      formData.password = password;
    }

    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
      document.getElementById('phoneError').textContent =
        'Please enter a valid Ukrainian phone number.';
      document.getElementById('phoneError').style.display = 'block';
      isValid = false;
    } else {
      formData.phone = phone;
    }

    const dob = document.getElementById('dob').value;
    if (!dob) {
      document.getElementById('dobError').textContent =
        'Please enter your date of birth.';
      document.getElementById('dobError').style.display = 'block';
      isValid = false;
    } else {
      const birthDate = new Date(dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 18) {
        document.getElementById('dobError').textContent =
          'You must be at least 18 years old to register.';
        document.getElementById('dobError').style.display = 'block';
        isValid = false;
      } else {
        formData.dateOfBirth = dob;
      }
    }

    const website = document.getElementById('website').value.trim();
    if (website) {
      const websiteRegex =
        /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
      if (!websiteRegex.test(website)) {
        document.getElementById('websiteError').textContent =
          'Please enter a valid URL.';
        document.getElementById('websiteError').style.display = 'block';
        isValid = false;
      } else {
        formData.website = website;
      }
    }

    if (isValid) {
      console.log('Registration data:', formData);
      alert('Registration successful! Check console for details.');
    }
  });
});
