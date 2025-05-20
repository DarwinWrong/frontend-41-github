const translations = {
  ua: {
    title: "Форма реєстрації",
    regTitle: "Реєстрація",
    loginPlaceholder: "Введіть логін",
    saveBtn: "Зберегти логін",
    clearBtn: "Очистити всі дані",
    practiceTitle: "Практична вправа",
    cameraBtn: "Увімкнути камеру",
    recordBtn: "Почати запис",
    languageLabel: "Мова сайту:"
  },
  en: {
    title: "Registration Form",
    regTitle: "Registration",
    loginPlaceholder: "Enter your login",
    saveBtn: "Save Login",
    clearBtn: "Clear All Data",
    practiceTitle: "Practice Task",
    cameraBtn: "Turn On Camera",
    recordBtn: "Start Recording",
    languageLabel: "Site Language:"
  }
};

const langSelect = document.getElementById('language');
langSelect.value = localStorage.getItem('lang') || 'ua';
updateLanguage();

langSelect.addEventListener('change', () => {
  localStorage.setItem('lang', langSelect.value);
  updateLanguage();
});

function updateLanguage() {
  const lang = translations[langSelect.value];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (lang[key]) el.textContent = lang[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (lang[key]) el.placeholder = lang[key];
  });
}

function saveLogin() {
  const login = document.getElementById('login').value;
  document.cookie = `login=${login}; path=/; max-age=31536000`;
  alert("Збережено");
}

function clearAll() {
  localStorage.clear();
  document.cookie = "login=; Max-Age=0";
  alert("Очищено");
}

const video = document.getElementById('video');
document.getElementById('cameraBtn').addEventListener('click', async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
  setTimeout(() => {
    stream.getTracks().forEach(track => track.stop());
    video.srcObject = null;
  }, 3000);
});

document.getElementById('recordBtn').addEventListener('click', async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
  const recorder = new MediaRecorder(stream);
  const chunks = [];

  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'video/webm' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'video.webm';
    a.click();
  };

  recorder.start();
  setTimeout(() => {
    recorder.stop();
    stream.getTracks().forEach(track => track.stop());
  }, 5000);
});
