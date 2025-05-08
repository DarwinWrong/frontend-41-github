document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const visitedYes = document.getElementById('visitedYes');
    const visitedNo = document.getElementById('visitedNo');
    const previousEventContainer = document.getElementById('previousEventContainer');
    const previousEventInput = document.getElementById('previousEvent');
    const errorContainer = document.getElementById('errorContainer');
  
    visitedYes.addEventListener('change', () => {
      previousEventContainer.classList.remove('hidden');
    });
  
    visitedNo.addEventListener('change', () => {
      previousEventContainer.classList.add('hidden');
      previousEventInput.value = '';
    });
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      errorContainer.textContent = '';
  
      const formData = getFormData();
  
      if (!isAgeValid(formData.birthdate)) {
        errorContainer.textContent = 'Вам має бути не менше 18 років.';
        return;
      }
  
      if (formData.visitedBefore === 'yes' && formData.previousEvent === '') {
        errorContainer.textContent = 'Будь ласка, вкажіть захід, який ви відвідували.';
        return;
      }
  
      console.log(formData);
      alert('Форма успішно відправлена! Перевірте консоль.');
  
      form.reset();
      previousEventContainer.classList.add('hidden');
    });
  
    function getFormData() {
      return {
        fullName: document.getElementById('fullName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        birthdate: document.getElementById('birthdate').value,
        position: document.getElementById('position').value.trim(),
        visitedBefore: visitedYes.checked ? 'yes' : 'no',
        previousEvent: previousEventInput.value.trim()
      };
    }
  
    function isAgeValid(birthdate) {
      const today = new Date();
      const birthDate = new Date(birthdate);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age >= 18;
    }
  });
  