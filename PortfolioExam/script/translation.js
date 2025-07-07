const translations = {
    en: {
        "Портфоліо": "Portfolio",
        "Послуги": "Services",
        "Про мене": "About Me",
        "Зв'язатися зі мною": "Contact me",
        "Найняти мене": "Hire Me",
        "Завантажити резюме": "Download CV",
        "Переглянути резюме": "Show CV",
        "UI/UX дизайнер": "UI/UX Designer",
        "Досвід": "Experiences",
        "Виконані проєкти": "Projects Done",
        "Задоволені клієнти": "Happy Clients"
    },
    ua: {
        "Portfolio": "Портфоліо",
        "Services": "Послуги",
        "About Me": "Про мене",
        "Contact me": "Зв'язатися зі мною",
        "Hire Me": "Найняти мене",
        "Download CV": "Завантажити резюме",
        "Show CV": "Переглянути резюме",
        "UI/UX Designer": "UI/UX дизайнер",
        "Experiences": "Досвід",
        "Projects Done": "Виконані проєкти",
        "Happy Clients": "Задоволені клієнти"
    }
};
function setLanguage(lang) {
    const elements = document.querySelectorAll('[text-to-translate]');
    elements.forEach(el => {
        const key = el.textContent.trim();
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}