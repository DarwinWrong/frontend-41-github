document.addEventListener('DOMContentLoaded', () => {
  console.log("Form handler script loaded");

  const form = document.querySelector('.contact-form');

  if (!form) {
    console.error("Form not found");
    return;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const timeline = document.getElementById('timeline').value.trim();
    const projectDetails = document.getElementById('project-details').value.trim();

    if (!name) return alert("Please enter your name.");
    if (!email) return alert("Please enter your email.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Invalid email address.");
    if (!phone) return alert("Please enter your phone number.");
    if (!service) return alert("Please select a service.");
    if (!timeline) return alert("Please enter the timeline.");
    if (!projectDetails) return alert("Please enter project details.");

    console.log("Form submitted successfully.");
    alert("Your message has been sent successfully!");

    form.reset();
  });
});
