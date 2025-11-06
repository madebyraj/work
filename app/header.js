const headerControl = document.querySelector(".headerControl");
const header = document.querySelector(".header");
const headerTabs = document.querySelectorAll(".headerTab");

let isExpanded = false;

// Toggle menu
function toggleMenu() {
  isExpanded = !isExpanded;
  header.classList.toggle("headerExpanded", isExpanded);
}

// Close menu
function closeMenu() {
  if (isExpanded) {
    isExpanded = false;
    header.classList.remove("headerExpanded");
  }
}

// Open menu on control click
headerControl.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!header.contains(e.target)) {
    closeMenu();
  }
});

// Close menu on scroll
let scrollTimeout;
window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    closeMenu();
  }, 25);
});

// Close menu on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

// Close menu when clicking any tab
headerTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (!tab.classList.contains("activeTab")) {
      closeMenu();
    }
  });
});

// Prevent clicks inside header from closing it
header.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Active Tab State
const headerTab = document.querySelectorAll(".headerTab");
const windowPathname = window.location.pathname;

headerTab.forEach((headerTab) => {
  const headerTabPathname = new URL(headerTab.href).pathname;

  if (
    windowPathname === headerTabPathname ||
    (windowPathname === "/index.html" && headerTabPathname === "/")
  ) {
    headerTab.classList.add("activeTab");
  }
});
