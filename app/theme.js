const themeBtn = document.querySelector(".theme");

function getCurrentTheme() {
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  localStorage.getItem("work.theme")
    ? (theme = localStorage.getItem("work.theme"))
    : null;

  return theme;
}

function loadTheme(theme) {
  const root = document.querySelector(":root");
  if (theme === "light") {
    themeBtn.innerHTML = `<img src="./assets/Icons/dark-mode.svg" preload alt="Dark mode button">`;
  } else {
    themeBtn.innerHTML = `<img src="./assets/Icons/light-mode.svg" preload alt="Light mode button">`;
  }

  root.setAttribute("color-scheme", `${theme}`);
}

themeBtn.addEventListener("click", () => {
  let theme = getCurrentTheme();
  if (theme === "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }

  localStorage.setItem("work.theme", `${theme}`);
  loadTheme(theme);
});

window.addEventListener("DOMContentLoaded", () => {
  loadTheme(getCurrentTheme());
});
