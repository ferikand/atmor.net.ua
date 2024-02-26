const frontPage = document.querySelector(".frontPage");
const whyAtmorPage = document.querySelector(".whyAtmorPage");
const turnBackTomainPage = document.querySelector(".turnBackTomainPage");
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

qualitySect.classList.add("hidden");
greenTechSect.classList.add("hidden");
experienceSect.classList.add("hidden");
mainOfWhySect.classList.add("hidden");
heatersPage.classList.add("hidden");

document.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("aboutBtn")) {
    aboutSect.classList.remove("hidden");
    mainOfWhySect.classList.add("hidden");
    qualitySect.classList.add("hidden");
    greenTechSect.classList.add("hidden");
    experienceSect.classList.add("hidden");
  }
  if (e.target.classList.value === "whyMainLink") {
    aboutSect.classList.add("hidden");
    qualitySect.classList.add("hidden");
    greenTechSect.classList.add("hidden");
    experienceSect.classList.add("hidden");
  }
  if (e.target.classList.value === "experienceLink") {
    aboutSect.classList.add("hidden");
    mainOfWhySect.classList.add("hidden");
    qualitySect.classList.add("hidden");
    greenTechSect.classList.add("hidden");
    experienceSect.classList.remove("hidden");
  }
  if (e.target.classList.value === "qualityLink") {
    aboutSect.classList.add("hidden");
    mainOfWhySect.classList.add("hidden");
    qualitySect.classList.remove("hidden");
    greenTechSect.classList.add("hidden");
    experienceSect.classList.add("hidden");
  }
  if (e.target.classList.value === "greenTechLink") {
    aboutSect.classList.add("hidden");
    mainOfWhySect.classList.add("hidden");
    qualitySect.classList.add("hidden");
    greenTechSect.classList.remove("hidden");
    experienceSect.classList.add("hidden");
  }
  if (e.target.classList.contains("whyAtmorBtn")) {
    frontPage.classList.add("hidden");
    aboutSect.classList.remove("hidden");
    whyAtmorPage.classList.remove("hidden");
    applPage.classList.add("hidden");
  }
  if (e.target.classList.value === "turnBackTomainPage") {
    frontPage.classList.remove("hidden");
    whyAtmorPage.classList.add("hidden");
    applPage.classList.add("hidden");
  }
  if (
    e.target.classList.contains("applicationBtn") ||
    e.target.classList.contains("backToAppl")
  ) {
    applPage.classList.remove("hidden");
    frontPage.classList.add("hidden");
    whyAtmorPage.classList.add("hidden");
    heatersPage.classList.add("hidden");
    hotapEl.classList.remove("hidden");
    basicEl.classList.remove("hidden");
    inline5El.classList.remove("hidden");
    inline7El.classList.remove("hidden");
  }
  if (e.target.classList.value === "bigLogo") {
    qualitySect.classList.add("hidden");
    greenTechSect.classList.add("hidden");
    experienceSect.classList.add("hidden");
    mainOfWhySect.classList.add("hidden");
    heatersPage.classList.add("hidden");
    whyAtmorPage.classList.add("hidden");
    frontPage.classList.remove("hidden");
    applPage.classList.add("hidden");
  }
  if (e.target.classList.contains("showerBtn")) {
    applPage.classList.add("hidden");
    heatersPage.classList.remove("hidden");
    hotapEl.classList.add("hidden");
  }
  if (e.target.classList.contains("sinkBtn")) {
    applPage.classList.add("hidden");
    heatersPage.classList.remove("hidden");
    basicEl.classList.add("hidden");
  }
  if (
    e.target.classList.contains("homeBtn") ||
    e.target.classList.contains("businessBtn")
  ) {
    applPage.classList.add("hidden");
    heatersPage.classList.remove("hidden");
  }
});
