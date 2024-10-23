const themeToggle = document.querySelector(".theme-toggle");
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");
const STORAGE_KEY = "theme-preference";

// Function to set theme and update localStorage
function setTheme(isDark) {
  const theme = isDark ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
  sunIcon.style.display = isDark ? "none" : "block";
  moonIcon.style.display = isDark ? "block" : "none";
}

// Function to get initial theme
function getInitialTheme() {
  // Check localStorage first
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme) {
    return savedTheme === "dark";
  }

  // Fall back to system preference if no saved theme
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

// Initialize theme
setTheme(getInitialTheme());

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  setTheme(currentTheme === "light");
});

// Listen for system theme changes when no saved preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    // Only update theme if there's no saved preference
    if (!localStorage.getItem(STORAGE_KEY)) {
      setTheme(e.matches);
    }
  });
