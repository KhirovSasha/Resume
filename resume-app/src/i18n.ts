import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      resume: {
        name: "Sasha Khirov",
        role: "Frontend Developer",
        contacts: {
          email: "sasha.khiro@gmail.com",
          phone: "+380637298062",
          location: "Rivne, Ukraine",
          linkedInLabel: "LinkedIn",
          linkedInUrl: "https://www.linkedin.com/in/sasha-khirov-626b31220/",
          githubLabel: "GitHub",
          githubUrl: "https://github.com/KhirovSasha",
          telegramLabel: "Telegram",
          telegramUrl: "https://t.me/khirooooooo",
        },
        sections: {
          professionalSummary: "Professional Summary",
          technicalToolkit: "Technical Toolkit",
          workExperience: "Work Experience",
          education: "Education",
          volunteering: "Volunteering & Social Impact",
          statsConnect: "Contacts",
          aboutMe: "About Me",
        },
        summary:
          "A goal-oriented Frontend Developer focused on professional growth and continuous skill improvement. I specialize in the modern JavaScript stack (ES6+), HTML5, and CSS3, with a deep understanding of responsive design and performance optimization. Skilled in transforming complex design layouts into clean, semantic, and maintainable code. Highly adaptable to different projects and tasks, consistently striving to achieve the best results in every challenge.",
        summaryList: [
          "Developed and implemented 10+ custom WordPress themes, featuring complex CSS/JS animations and ensuring 100% responsiveness across all device types.",
          "Designed and developed React layouts for dynamic web interfaces, focusing on reusable components and fast rendering.",
          "Built frontend solutions for Wagtail (Django), ensuring seamless design integration with the CMS and flexible content management.",
          "Optimized project performance, consistently achieving 90+ scores on Google PageSpeed Insights through asset and code optimization.",
          "",
        ],
        aboutMe:
          "I lead an active lifestyle with a passion for sports like frisbee, running, and hiking. I dream of climbing in the Alps one day. I also have an old black cat named Murzik (my favorite 'old-timer'), with whom I explore Tabletop RPGs. In the evenings, I'm always up for some board games.",
        toolkit: {
          languagesLabel: "Programming Languages:",
          languages:
            "JavaScript (ES6+), TypeScript, PHP, HTML5, CSS3 (SASS/SCSS).",
          frameworksLabel: "Frameworks & Libraries:",
          frameworks: "React, Tailwind CSS, WordPress, Bootstrap, Django.",
          toolsLabel: "Tools & Environment:",
          tools: "Git, GitHub, NPM/Yarn, Vite, Webpack, Gulp.",
          speakingLanguagesLabel: "Languages:",
          speakingLanguages: "Ukrainian (Native), English (A2)",
        },
        jobs: {
          devolux: {
            title: "Frontend/CMS Developer — Devolux.nl B.V.",
            companyUrl: "https://devolux.nl/",
            meta: "March 2024 – Present | Remote / Netherlands",
            points: [
              "Develop and maintain high-traffic web platforms based on WordPress and React, ensuring scalability and performance.",
              "Create complex UI layouts using modern styling and animation techniques.",
              "Optimize workflows using modern build tools (Vite/NPM).",
            ],
          },
          gard: {
            title: "CMS Developer — Gard",
            companyUrl: "https://gard.com.ua/",
            meta: "June 2023 – October 2023 | Rivne, Ukraine",
            points: [
              "Specialized in developing and customizing e-commerce stores based on the OpenCart CMS.",
              "Developed and adapted themes, implementing custom functionality to increase conversion rates and improve administrative efficiency.",
              "Performed technical optimization of sites, including database management and page load speed improvements.",
              "Integrated third-party modules and services (payment gateways, shipping services), ensuring a stable e-commerce environment.",
            ],
          },
        },
        education: {
          title: 'National University of "Ostroh Academy"',
          meta: "2018 – 2022 | Bachelor in Economic Cybernetics (System Analysis and Mathematical Modeling)",
          points: [
            "Major in Economic Cybernetics: In-depth study of system analysis methods, complex modeling, and process algorithmization.",
            "Academic focus: Economic-mathematical modeling (EMM), operations research, and data architecture design.",
          ],
        },
        volunteering: {
          etSetera: {
            title: "Volunteer — NGO 'ET SETERA'",
            meta: "2023 — 2025",
            points: [
              "Organized and facilitated tabletop role-playing games (TTRPGs) and educational events for children. Developed skills in facilitation, public speaking, and the ability to adapt complex rules for diverse audiences.",
            ],
          },
          bur: {
            title: "Volunteer — Building Ukraine Together (BUR)",
            meta: "2023",
            points: [
              "Missions in Makariv and Odesa: Participated in rebuilding residential infrastructure and improving community spaces. Developed strong teamwork and stress-management skills in high-pressure environments.",
            ],
          },
        },
        quote: "\"Clean code and 'Kawabunga' inspire my journey.\"",
        language: {
          en: "EN",
          uk: "UK",
        },
      },
    },
  },
  uk: {
    translation: {
      resume: {
        name: "Саша Хіров",
        role: "Frontend-розробник",
        contacts: {
          email: "sasha.khiro@gmail.com",
          phone: "+380637298062",
          location: "Рівне, Україна",
          linkedInLabel: "LinkedIn",
          linkedInUrl: "https://www.linkedin.com/in/sasha-khirov-626b31220/",
          githubLabel: "GitHub",
          githubUrl: "https://github.com/KhirovSasha",
          telegramLabel: "Telegram",
          telegramUrl: "https://t.me/khirooooooo",
        },
        sections: {
          professionalSummary: "Характеристика",
          technicalToolkit: "Технічний інструментарій",
          workExperience: "Досвід роботи",
          education: "Освіта",
          volunteering: "Волонтерство та соціальний вплив",
          statsConnect: "Контакти",
          aboutMe: "Про мене",
        },
        summary:
          "Цілеспрямований розробник, зосереджений на саморозвитку та вдосконаленні навичок. Спеціалізуюся на сучасному стеку JavaScript (ES6+), HTML5 та CSS3, з глибоким розумінням адаптивного дизайну та оптимізації продуктивності. Маю навички перетворення складних дизайн-макетів у чистий, семантичний та зручний у підтримці код. Адаптовуюсь під різні проєкти та завдання, прагнучи досягти найкращих результатів у кожному виклику.",
        summaryList: [
          "Розробив та впровадив понад 10 кастомних WordPress тем, реалізуючи складні CSS/JS анімації та забезпечуючи 100% адаптивність на всіх типах пристроїв.",
          "Спроєктував та реалізував React-макети для динамічних веб-інтерфейсів, зосереджуючись на повторно використовуваних компонентах та швидкому рендерингу.",
          "Розробив frontend-рішення для Wagtail (Django), забезпечуючи безшовну інтеграцію дизайну з CMS та гнучке управління контентом.",
          "Оптимізував продуктивність проєктів, досягаючи показників 90+ у Google PageSpeed Insights завдяки оптимізації активів та коду.",
        ],
        aboutMe:
          "Я веду активний спосіб життя і особливо люблю спортивну діяльність, включаючи фрісбі, біг та піші туристичні походи. Маю мрію спробувати скелелазіння в Альпах. Також у мене є старий чорний кіт на ім'я Мурзик (мій улюблений 'старий пердун'), з яким я досліджую настільні рольові ігри. Вечорами я завжди не проти для настільних ігор.",
        toolkit: {
          languagesLabel: "Мови програмування:",
          languages:
            "JavaScript (ES6+), TypeScript, PHP, HTML5, CSS3 (SASS/SCSS).",
          frameworksLabel: "Фреймворки та бібліотеки:",
          frameworks: "React, Tailwind CSS, WordPress, Bootstrap, Django.",
          toolsLabel: "Інструменти та середовище:",
          tools: "Git, GitHub, NPM/Yarn, Vite, Webpack, Gulp.",
          speakingLanguagesLabel: "Мови:",
          speakingLanguages: "Українська (рідна), Англійська (A2)",
        },
        jobs: {
          devolux: {
            title: "Frontend/CMS-розробник — Devolux.nl B.V.",
            companyUrl: "https://devolux.nl/",
            meta: "Березень 2024 – Дотепер | Віддалено / Нідерланди",
            points: [
              "Розробляю та підтримую високонавантажені веб-платформи на базі WordPress та React, забезпечуючи масштабованість та продуктивність.",
              "Створюю складні UI-макети, використовуючи сучасні техніки стилізації та анімацій.",
              "Оптимізую робочі процеси за допомогою сучасних інструментів збірки (Vite/NPM).",
            ],
          },
          gard: {
            title: "CMS-розробник — Gard",
            companyUrl: "https://gard.com.ua/",
            meta: "Червень 2023 – Жовтень 2023 | Рівне, Україна",
            points: [
              "Спеціалізувався на розробці та кастомізації інтернет-магазинів на основі CMS OpenCart.",
              "Розробляв та адаптував тему, впроваджуючи кастомний функціонал для підвищення конверсії та покращення зручності адміністрування.",
              "Виконував технічну оптимізацію сайтів, включаючи управління базами даних та покращення швидкості завантаження сторінок.",
              "Інтегрував сторонні модулі та сервіси (платіжні шлюзи, служби доставки), забезпечуючи стабільне середовище електронної комерції.",
            ],
          },
        },
        education: {
          title: 'Національний університет "Острозька академія"',
          meta: "2018 – 2022 | Бакалавр з економічної кібернетики (Системний аналіз та математичне моделювання)",
          points: [
            'Спеціальність "Економічна кібернетика": Поглиблене вивчення методів системного аналізу, складного моделювання та алгоритмізації процесів.',
            "Академічний фокус: Економіко-математичне моделювання (ЕММ), дослідження операцій та проєктування архітектури даних.",
          ],
        },
        volunteering: {
          etSetera: {
            title: "Волонтер — ГО «ЕТ СЕТЕРА»",
            meta: "2023 — 2025",
            points: [
              "Організація та участь у проведенні настільно-рольових ігор (НРІ) та освітніх івентів для дітей. Розвинув навички фасилітації, публічних виступів та вміння адаптувати складні правила під різні аудиторії.",
            ],
          },
          bur: {
            title: "Волонтер — Будуємо Україну Разом (БУР)",
            meta: "2023",
            points: [
              "Місії в Макарові та Одесі: Брав участь у відновленні житлової інфраструктури та покращенні громадських просторів. Розвинув навички командної роботи та управління стресом у високонавантажених середовищах.",
            ],
          },
        },
        quote: "\"Чистий код та 'Kawabunga' надихають мою подорож.\"",
        language: {
          en: "EN",
          uk: "UK",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
