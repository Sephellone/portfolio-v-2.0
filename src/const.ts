import { computed } from "vue";
import { i18n } from "./lang/i18n";

export const stackItems = [
  { name: "TypeScript", icon: "typescript" },
  { name: "Vue.js", icon: "vue" },
  { name: "JavaScript", icon: "js" },
  { name: "Vuex", icon: "vuex" },
  { name: "Pinia", icon: "pinia" },
  { name: "React", icon: "react" },
  { name: "HTML5", icon: "html" },
  { name: "CSS3", icon: "css" },
  { name: "Sass", icon: "sass" },
  { name: "GraphQL", icon: "graphql" },
  { name: "Jest", icon: "jest" },
  { name: "Git", icon: "git" },
  { name: "Figma", icon: "figma" },
];

export const contacts = [
  {
    label: "mail",
    href: "mailto:alexandra.tsidulko@gmail.com",
    hiddenDescription: "Email",
    text: "alexandra.tsidulko@gmail.com",
  },
  { label: "tg", href: "https://t.me/aletsia", hiddenDescription: "Telegram", text: "@aletsia" },
  {
    label: "github",
    href: "https://github.com/sephellone",
    hiddenDescription: "GitHub",
    text: "github.com/sephellone",
  },
  { label: "vk", href: "https://vk.ru/sephellone", hiddenDescription: "VK", text: "vk.ru/sephellone" },
];

export const experienceItems = computed(() => [
  {
    company: "Scrile",
    position: i18n.global.t("Frontend разработчик"),
    period: "2023 - 2026",
    descriptionLine1: i18n.global.t("scrileDescription1"),
    descriptionLine2: i18n.global.t("scrileDescription2"),
    tags: ["Vue 2.6", "TypeScript", "Vuex", "GraphQL", "WebRTC", "Jest", "React", "Nuxt", "Webpack"],
  },
  {
    company: "Редакция Рыба",
    position: i18n.global.t("Frontend разработчик"),
    period: "2024 - 2026",
    descriptionLine1: i18n.global.t("rybaDescription1"),
    descriptionLine2: i18n.global.t("rybaDescription2"),
    tags: ["Vue 3", "TypeScript", "Pinia", "Canvas API", "Kaplay.js", "Vite"],
  },
]);

export const educationItems = computed(() => [
  {
    school: "HTML-academy",
    position: i18n.global.t("Профессия Фронтенд-разработчик"),
    period: "2022 - 2023",
  },
  {
    school: i18n.global.t("Аспирантура ФИЦ ФТМ"),
    position: i18n.global.t("Кандидат наук"),
    period: "2015 - 2021",
  },
  {
    school: i18n.global.t("Новосибирский Государственный Университет"),
    position: i18n.global.t("Факультет Естественных Наук"),
    period: "2008 - 2013",
    descriptionLine: i18n.global.t("Специалист"),
  },
]);

export const projects = computed(() => [
  {
    id: "1",
    name: i18n.global.t("Красный автобус"),
    description: [
      i18n.global.t("Сайт рекламной кампании приуроченной к началу нового учебного года."),
      i18n.global.t("Две мини-игры, объединенные тематикой школьной атмосферы."),
    ],
    tags: ["Vue 3", "Typescript", "Pinia"],
    link: "https://redschoolbus2026.ru",
    img: "redbus",
  },
  {
    id: "2",
    name: i18n.global.t("Ёлка-гадалка"),
    description: [
      i18n.global.t("Новогодний спецпроект для компании Комус."),
      i18n.global.t("Интерактивный сайт на Canvas API с анимацией и звуками."),
    ],
    tags: ["Vue 3", "Typescript", "Canvas API", "Pinia"],
    link: "https://elkagadalka.ru",
    img: "yolka",
  },
  {
    id: "3",
    name: i18n.global.t("Спартадув"),
    description: [
      i18n.global.t("Сайт-игра для рекламы Спартакиады Комуса 2026."),
      i18n.global.t("Гонка за призами на виндсерфах."),
    ],
    tags: ["Vue 3", "Typescript"],
    link: "https://spartaduv.ru",
    img: "sparta",
  },
  {
    id: "4",
    name: i18n.global.t("Зомби-офис"),
    description: [
      i18n.global.t("Сайт для рекламной кампании бренда Деловой Стандарт."),
      i18n.global.t("Две мини-игры с различной динамикой и фокусом на продукцию бренда."),
    ],
    tags: ["Vue 3", "Typescript", "Kaplay.js", "Pinia"],
    link: "https://zombieoffice.ru",
    img: "zombie",
  },
  {
    id: "5",
    name: i18n.global.t("Трекер времени"),
    description: [i18n.global.t("Личный проект. Сайт для учета времени по задачам.")],
    tags: ["Vue 3", "Typescript", "Pinia", "Firebase"],
    link: "https://time-tracker-25243.web.app/",
    img: "time-tracker",
  },
]);
