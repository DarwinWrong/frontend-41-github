document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.navigation');
    burger.addEventListener('click', function () {
      nav.classList.toggle('active');
      burger.classList.toggle('open');
    });
    document.addEventListener('click', function (e) {
      if (!burger.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('active');
        burger.classList.remove('open');
      }
    });
  });
  

  
  function downloadCV() {
    const link = document.getElementById('downloadLink');
    link.href = './docs/CV.pdf';
    link.download = 'CV.pdf';
    link.click();
  }

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('ThemeToggle')
    const html = document.documentElement
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark')
    }
    toggleBtn.addEventListener('click', () => {
        const isDark = html.classList.toggle('dark')
        localStorage.setItem('theme', isDark ? 'dark' : 'light')
    })
})

const translations = {
    uk: {
      about: "Про мене",
      work: "Роботи",
      testimonials: "Відгуки",
      contact: "Контакти",
        download: "Завантажити CV",

        greeting: "Привіт, я — Сагар 👋",
        intro: "Я фулстек-розробник (React.js та Node.js), який спеціалізується на створенні (а іноді й дизайні) виняткових цифрових інтерфейсів, які є швидкими, доступними, візуально привабливими та адаптивними. Хоча я створюю вебзастосунки вже понад 7 років, я все ще люблю це, ніби це щось нове.",
        location: "Ахмедабад, Індія",
        available: "Доступний для нових проєктів",

        skills: "Навички",
        skillsText: "Навички, інструменти та технології, які я добре знаю:",
   
        workBtn: "Роботи",
        workText: "Деякі з моїх останніх робіт:",

        testimonialsBtn: "Відгуки",
        testimonialsText: "Гарні слова, які про мене сказали:",

        testimonial1_text: "«Відмінна робота! Я дуже вражений. Він дуже добре робить свою справу. Рекомендую Сагара і найму знову для фронтенд розробки.»",
        testimonial1_author: "Джон Доу",
        testimonial1_company: "Засновник - xyz.com",

        testimonial2_text: "«Чудова людина, дуже рекомендую для складної фронтенд розробки! Його навички на вищому рівні і він буде чудовим доповненням до будь-якої команди.»",
        testimonial2_author: "Джон Доу",
        testimonial2_company: "Засновник - abc.com",

        testimonial3_text: "«Сагар дуже приємний у роботі і дійсно дбає про успіх проєкту. Він має високий рівень знань і міг працювати над моїм MERN стек додатком без проблем.»",
        testimonial3_author: "Джон Доу",
        testimonial3_company: "Фрілансер",

        experience: "Мій досвід",
        exp_2015_title: "2015 - Закінчив університет",
        exp_2015_desc: "Отримав ступінь бакалавра комп'ютерних наук",
        exp_2017_title: "2017 - Сертифікат Frontend Developer",
        exp_2017_desc: "Пройшов курс React та Javascript",
        exp_2019_title: "2019 - Робота в компанії ЕХ",
        exp_2019_desc: "Працював розробником Frontend, створював веб-додатки",
        exp_2022_title: "2022 - Фрілансер",
        exp_2022_desc: "Працюю на замовлення, реалізую веб-сервіси",

        contactBtn: "Зв’язатися",
        contactText: "Що далі? Звертайтеся до мене, якщо ви шукаєте розробника, маєте запитання або просто хочете зв’язатися.",

        socialPrompt: "Ви також можете знайти мене на цих платформах!",
    },
    en: {
      about: "About",
      work: "Work",
      testimonials: "Testimonials",
      contact: "Contact",
        download: "Download CV",

        greeting: "Hello, I'm Sagar 👋",
        intro: "I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.",
        location: "Ahmedabad, India",
        available: "Available for new projects",

        skills: "Skills",
        skillsText: "The skills, tools and technologies I am really good at:",

        workBtn: "Work",
        workText: "Some of the noteworthy projects I have built:",

        testimonialsBtn: "Testimonials",
        testimonialsText: "Nice things people have said about me:",

        testimonial1_text: "Job well done! I am really impressed. He is very very good at what he does. I would recommend Sagar and will rehire in the future for Frontend development.",
        testimonial1_author: "John Doe",
        testimonial1_company: "Founder - xyz.com",

        testimonial2_text: "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
        testimonial2_author: "John Doe",
        testimonial2_company: "Founder - abc.com",

        testimonial3_text: "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
        testimonial3_author: "John Doe",
        testimonial3_company: "Freelancer",

        experience: "My Experience",
        exp_2015_title: "2015 - Graduated University",
        exp_2015_desc: "Received a Bachelor's degree in Computer Science",
        exp_2017_title: "2017 - Frontend Developer Certificate",
        exp_2017_desc: "Completed React and Javascript course",
        exp_2019_title: "2019 - Worked at EX Company",
        exp_2019_desc: "Worked as a Frontend developer building web apps",
        exp_2022_title: "2022 - Freelancer",
        exp_2022_desc: "Working on freelance projects, building web services",

        contactBtn: "Get in touch",
        contactText: "What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.",

        socialPrompt: "You may also find me on these platforms!"

    }
  };


    const elements = {
        about: document.getElementById("aboutLink"),
        work: document.getElementById("workLink"),
        testimonials: document.getElementById("testimonialsLink"),
        contact: document.getElementById("contactLink"),
        download: document.getElementById("downloadBtn"),

        greeting: document.getElementById("greeting"),
        intro: document.getElementById("intro"),
        location: document.getElementById("location"),
        available: document.getElementById("available"),

        skills: document.getElementById("skillsBtn"),
        skillsText: document.getElementById("skillsText"),

        workBtn: document.getElementById("workBtn"),
        workText: document.getElementById("workText"),

        testimonialsBtn: document.getElementById("testimonialsBtn"),
        testimonialsText: document.getElementById("testimonialsText"),

        testimonial1_text: document.getElementById("testimonial1_text"),
        testimonial1_author: document.getElementById("testimonial1_author"),
        testimonial1_company: document.getElementById("testimonial1_company"),  

        testimonial2_text: document.getElementById("testimonial2_text"),
        testimonial2_author: document.getElementById("testimonial2_author"),
        testimonial2_company: document.getElementById("testimonial2_company"),

        testimonial3_text: document.getElementById("testimonial3_text"),
        testimonial3_author: document.getElementById("testimonial3_author"),
        testimonial3_company: document.getElementById("testimonial3_company"),

        experience: document.getElementById("experience"),
        exp_2015_title: document.getElementById("exp_2015_title"),
        exp_2015_desc: document.getElementById("exp_2015_desc"),
        exp_2017_title: document.getElementById("exp_2017_title"),
        exp_2017_desc: document.getElementById("exp_2017_desc"),
        exp_2019_title: document.getElementById("exp_2019_title"),
        exp_2019_desc: document.getElementById("exp_2019_desc"),
        exp_2022_title: document.getElementById("exp_2022_title"),
        exp_2022_desc: document.getElementById("exp_2022_desc"),

        contactBtn: document.getElementById("contactBtn"),
        contactText: document.getElementById("contactText"),

        socialPrompt: document.getElementById("socialPrompt"),

    };

    function switchLanguage(lang) {
      localStorage.setItem("lang", lang);
      const t = translations[lang];
   
      elements.about.textContent = t.about;
      elements.work.textContent = t.work;
      elements.testimonials.textContent = t.testimonials;
        elements.contact.textContent = t.contact;
        elements.download.textContent = t.download;
        
        elements.greeting.textContent = t.greeting;
        elements.intro.textContent = t.intro;
        elements.location.textContent = t.location;
        elements.available.textContent = t.available;

        elements.skills.textContent = t.skills;
        elements.skillsText.textContent = t.skillsText

        elements.workBtn.textContent = t.workBtn
        elements.workText.textContent = t.workText

        elements.testimonialsBtn.textContent = t.testimonialsBtn
        elements.testimonialsText.textContent = t.testimonialsText

        elements.testimonial1_text.textContent = t.testimonial1_text;
        elements.testimonial1_author.textContent = t.testimonial1_author;
        elements.testimonial1_company.textContent = t.testimonial1_company;

        elements.testimonial2_text.textContent = t.testimonial2_text;
        elements.testimonial2_author.textContent = t.testimonial2_author;
        elements.testimonial2_company.textContent = t.testimonial2_company;

        elements.testimonial3_text.textContent = t.testimonial3_text;
        elements.testimonial3_author.textContent = t.testimonial3_author;
        elements.testimonial3_company.textContent = t.testimonial3_company;

        elements.experience.textContent = t.experience
        elements.exp_2015_title.textContent = t.exp_2015_title
        elements.exp_2015_desc.textContent = t.exp_2015_desc
        elements.exp_2017_title.textContent = t.exp_2017_title
        elements.exp_2017_desc.textContent = t.exp_2017_desc
        elements.exp_2019_title.textContent = t.exp_2019_title
        elements.exp_2019_desc.textContent = t.exp_2019_desc
        elements.exp_2022_title.textContent = t.exp_2022_title
        elements.exp_2022_desc.textContent = t.exp_2022_desc

        elements.contactBtn.textContent = t.contactBtn
        elements.contactText.textContent = t.contactText

        elements.socialPrompt.textContent = t.socialPrompt
    }
   
    document.addEventListener('DOMContentLoaded',()=>{
      const lang = localStorage.getItem('lang') || "uk";
      switchLanguage(lang)
      const toggle = document.getElementById("languageToggle");
      toggle.textContent = lang === "uk" ? "EN" : "UK"
      toggle.addEventListener("click",()=>{
        const currentLang = localStorage.getItem("lang")=== "uk" ? "en" : "uk";
        toggle.textContent = currentLang === "uk" ? "EN" : "UK";
        switchLanguage(currentLang)
      })
   
    })

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".copy").forEach((element) => {
        element.addEventListener('click', () => {
            const email = element.parentElement.querySelector('.text').textContent.trim()
            navigator.clipboard.writeText(email).then(() => {
                alert("Скопійовано!")
            })
        })
    })
})

const timelineItem = document.querySelectorAll('.timeline-item')
function checkTimeLineItems() {
    const triggerBottom = window.innerHeight * 0.8
    timelineItem.forEach(item => {
        const itemTop = item.getBoundingClientRect().top
        if (itemTop < triggerBottom) {
            item.classList.add('active')
        } else {
            item.classList.remove('active')
        }
    })
}
window.addEventListener('scroll', checkTimeLineItems)
window.addEventListener('load', checkTimeLineItems)
