const frontPage = document.querySelector(".frontPage");
const whyAtmorPage = document.querySelector(".whyAtmorPage");

const whyAtmorBtn = document.querySelector(".whyAtmorBtn");
const mainOfWhySect = document.querySelector(".mainOfWhy");
const experienceSect = document.querySelector(".experiense");
const qualitySect = document.querySelector(".quality");
const greenTechSect = document.querySelector(".greenTech");
const aboutSect = document.querySelector(".about");
const whyMainLink = document.querySelector(".whyMainLink");
const experienceLink = document.querySelector(".experienceLink");
const qualityLink = document.querySelector(".qualityLink");
const greenTechLink = document.querySelector(".greenTechLink");
const footer = document.querySelector("footer");
const causesLinks = document.querySelector(".causesLinks");
const applPage = document.querySelector(".applPage");
const applicationBtn = document.querySelector(".applicationBtn");
const heatersPage = document.querySelector(".heatersPage");
const bigLogo = document.querySelectorAll(".bigLogo");
const backToAppl = document.querySelector(".backToAppl");
const showerBtn = document.querySelector(".showerBtn");
const sinkBtn = document.querySelector(".sinkBtn");
const homeBtn = document.querySelector(".homeBtn");
const businessBtn = document.querySelector(".businessBtn");
const hotapEl = document.querySelector(".hotapEl");
const basicEl = document.querySelector(".basicEl");
const inline5El = document.querySelector(".inline5KWEl");
const inline7El = document.querySelector(".inline7KWEl");

// Проверяем наличие секций и скрываем их
const sections = [
  greenTechSect,
  experienceSect,
  mainOfWhySect,
  aboutSect,
  qualitySect,
];

sections.forEach((sec) => {
  if (sec && sec != aboutSect) {
    sec.classList.add("hidden");
  }
});

// Логика обработки кликов
document.addEventListener("click", (e) => {
  if (
    e.target.tagName === "A" &&
    e.target.getAttribute("href") === "index.html"
  ) {
    console.log("Ссылка на главную страницу была нажата");
    return; // Ссылка на главную страницу работает
  }

  console.log("Другой элемент был нажат:", e.target);

  if (e.target.classList.contains("aboutBtn")) {
    showSection(aboutSect);
  } else if (e.target.classList.contains("experienceLink")) {
    showSection(experienceSect);
  } else if (e.target.classList.contains("qualityLink")) {
    showSection(qualitySect);
  } else if (e.target.classList.contains("greenTechLink")) {
    showSection(greenTechSect);
  }

  if (
    e.target.classList.contains("applicationBtn") ||
    e.target.classList.contains("backToAppl")
  ) {
    applPage.classList.remove("hidden");
    frontPage.classList.add("hidden");
    whyAtmorPage.classList.add("hidden");
    heatersPage.classList.add("hidden");
    [hotapEl, basicEl, inline5El, inline7El].forEach((el) => {
      if (el) el.classList.remove("hidden");
    });
  }

  if (e.target.classList.contains("bigLogo")) {
    sections.forEach((sec) => {
      if (sec) sec.classList.add("hidden");
    });
    frontPage.classList.remove("hidden");
    applPage.classList.add("hidden");
  }

  if (e.target.classList.contains("showerBtn")) {
    heatersPage.classList.remove("hidden");
    hotapEl.classList.add("hidden");
    basicEl.classList.remove("hidden");
    applPage.style.setProperty("min-height", "auto"); // Убираем минимальную высоту
  } else if (e.target.classList.contains("sinkBtn")) {
    hotapEl.classList.remove("hidden");
    heatersPage.classList.remove("hidden");
    basicEl.classList.add("hidden");
    applPage.style.setProperty("min-height", "auto"); // Убираем минимальную высоту
  } else if (
    e.target.classList.contains("homeBtn") ||
    e.target.classList.contains("businessBtn")
  ) {
    heatersPage.classList.remove("hidden");
    hotapEl.classList.remove("hidden");
    basicEl.classList.remove("hidden");
    applPage.style.setProperty("min-height", "auto"); // Убираем минимальную высоту
  }
});

// Функция показа секции
const showSection = (section) => {
  if (section) {
    sections.forEach((sec) => {
      if (sec) sec.classList.add("hidden");
    });
    section.classList.remove("hidden");
  }
};
