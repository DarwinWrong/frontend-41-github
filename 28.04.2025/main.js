document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const messageDiv = document.getElementById("message");
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");
    const eventName = document.getElementById("event-name-group");
    const dateInput = document.getElementById('date');

    form.addEventListener('submit', function (event) {
        event.preventDefault()

        messageDiv.innerHTML = "";
        messageDiv.style.color = 'green'

        const fullname = form.fullname.value.trim()
        const email = form.email.value.trim()
        const phone = form.phone.value.trim()
        const selectEvent = form.event.value
        const isAgree = form.agreement.checked
        const visited = form.visited.value;
        const dateOfBirth = dateInput.value;

        const oldEventInput = form.querySelector('input[name="oldEvent"]');
        const oldEvent = oldEventInput ? oldEventInput.value.trim() : '';

        const selectTopics = []
        const topicsCheckboxes = form.querySelectorAll('input[name="topics"]:checked')
        topicsCheckboxes.forEach(checkbox => {
            selectTopics.push(checkbox.value)
        })

        if (!fullname || !email || !phone || !selectEvent || !isAgree) {
            showMessage("Будь ласка заповніть всі обов'язкові поля", 'red')
            return
        }

        if (!validateEmail(email)) {
            showMessage("Некоректний email", 'red')
            return
        }

        if (!validatePhone(phone)) {
            showMessage("Некоректний phone", 'red')
            return
        }
        if (!validateBirthday(dateOfBirth)) {
            return;
        }

        const formData = {
            fullname,
            email,
            phone,
            dateOfBirth,
            visited,
            eventVisited: oldEvent,
            eventSelected: selectEvent,
            topics: selectTopics,
            agreement: isAgree
        };
    
        console.log("Дані форми:", formData);

        showMessage(`Дякуємо за реєстрацію на захід, ${fullname}!`, 'green')

        form.reset()
    })

    function showMessage(message, color) {
        messageDiv.innerHTML = message
        messageDiv.style.color = color
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        return re.test(email);
    }
    function validatePhone(phone) {
        const re = /^\+380\d{9}$/;
        return re.test(phone);
    }
    function handleRadioChange() {
        if (yes.checked) {
            eventName.innerHTML = `
        <label for="oldEvent">Назвіть захід, який ви відвідували:</label>
        <input type="text" id="oldEvent" name="oldEvent" required />
      `;
        } else {
            eventName.innerHTML = ''
        }
    }
    yes.addEventListener('change', handleRadioChange);
    no.addEventListener('change', handleRadioChange);

    function validateBirthday(birthDate) {
        const birth = new Date(birthDate);
        const today = new Date(); 

        let age = today.getFullYear() - birth.getFullYear();
        if (
            today.getMonth() < birth.getMonth() ||
            (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
        ) {
            age--;
        }
        if (age < 18) {
            showMessage("Вам має бути 18 років або більше для реєстрації на захід", 'red');
            return false;
        } else {
            showMessage('', '');
            return true;
        }
    }
    dateInput.addEventListener('change', () => {
        validateBirthday(dateInput.value);
    });

})