 document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
      errorMessage.textContent = "Please fill in all fields.";
      return;
    }

    if (!emailRegex.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (message.length < 10) {
      errorMessage.textContent = "Message should be at least 10 characters.";
      return;
    }

    errorMessage.textContent = "";
    alert("Message sent successfully!");
    document.getElementById('contactForm').reset();
  });