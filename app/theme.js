const themeSwitch = document.querySelector(".theme-switch");
const themeOptions = document.querySelectorAll(".theme-option");

function setTheme(theme) {
  document.documentElement.setAttribute("color-scheme", theme);
  localStorage.setItem("theme", theme);

  themeOptions.forEach((option) => {
    option.classList.toggle("active", option.dataset.theme === theme);
  });
}

function getCurrentTheme() {
  return localStorage.getItem("theme") || "light";
}

themeSwitch.addEventListener("click", (e) => {
  if (e.target.closest(".theme-option")) {
    setTheme(e.target.closest(".theme-option").dataset.theme);
  }
});

// Initial theme setup
setTheme(getCurrentTheme());
