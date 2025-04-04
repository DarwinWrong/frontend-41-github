document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contactForm");
  
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
  
        const username = form.querySelector("input[name='username']").value;
        const email = form.querySelector("input[name='email']").value;
        const phone = form.querySelector("input[name='phone']").value;
        const message = form.querySelector("input[name='message']").value;
  
        const errorMessages = form.querySelectorAll(".error");
        errorMessages.forEach(function (error) {
          error.style.display = "none";
        });
  
        let errors = false;
  
        if (!username) {
          form.querySelector("input[name='username']").nextElementSibling.style.display = "inline";
          errors = true;
        } else if (username.length < 3) {
          form.querySelector("input[name='username']").nextElementSibling.innerText = "Username must be more than 2 characters.";
          form.querySelector("input[name='username']").nextElementSibling.style.display = "inline";
          errors = true;
        }
  
        if (!email) {
          form.querySelector("input[name='email']").nextElementSibling.style.display = "inline";
          errors = true;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          form.querySelector("input[name='email']").nextElementSibling.innerText = "Email is invalid.";
          form.querySelector("input[name='email']").nextElementSibling.style.display = "inline";
          errors = true;
        }
  
        if (!phone) {
          form.querySelector("input[name='phone']").nextElementSibling.style.display = "inline";
          errors = true;
        } else if (!/^\+?\d{8,}$/.test(phone)) {
          form.querySelector("input[name='phone']").nextElementSibling.style.display = "inline";
          errors = true;
        }
  
        if (errors) {
          return; 
        }
  
        alert("Registration is successful!");
        form.reset();  
      });
    }
  });
  