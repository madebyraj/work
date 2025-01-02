const themeSwitch = document.querySelector(".theme-switch");
const STORAGE_KEY = "theme-preference";

// Function to set theme and update localStorage
function setTheme(isDark) {
  const theme = isDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

// Function to get initial theme
function getInitialTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme) {
    return savedTheme === "dark";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Initialize theme
setTheme(getInitialTheme());

// Toggle theme on button click
themeSwitch.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  setTheme(currentTheme === "light");
});

// Listen for system theme changes when no saved preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches);
    }
  });
