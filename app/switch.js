const globalSwitch = document.querySelector(".switch");
const journeySection = document.querySelector(".journey-section");

globalSwitch.addEventListener("click", () => {
  journeySection.classList.toggle("active");
});
