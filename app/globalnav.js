// Menu Icon

const globalNavMenuIcon = document.querySelector("nav .gn-menuicon");
const globalNav = document.querySelector(".globalnav");

globalNavMenuIcon.addEventListener("click", () => {
  globalNav.classList.toggle("active");

  // Disable scroll when nav is active
  if (globalNav.classList.contains("active")) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});

// Link Active State

const globalNavLinks = document.querySelectorAll(".gn-item-menu a");
const windowPathname = window.location.pathname;

globalNavLinks.forEach((globalNavLink) => {
  const navLinkPathname = new URL(globalNavLink.href).pathname;

  if (
    windowPathname === navLinkPathname ||
    (windowPathname === "/index.html" && navLinkPathname === "/")
  ) {
    globalNavLink.classList.add("current");
  }
});

// Navbar Hide/Show on Scroll

let lastScrollTop = 0;
const navbar = document.querySelector(".globalnav");
const navbarBackground = document.querySelector(".gn-background");

function handleNavbarScroll() {
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  // Don't hide navbar if mobile menu is active
  if (navbar.classList.contains("active")) return;

  // Only start hiding/showing when navbar has background (scrolled)
  if (navbarBackground.classList.contains("scrolled")) {
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down - hide navbar
      navbar.classList.add("navbar-hidden");
    } else if (currentScrollTop < lastScrollTop) {
      // Scrolling up - show navbar
      navbar.classList.remove("navbar-hidden");
    }
  } else {
    // Always show navbar when at top
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollTop = currentScrollTop;
}

// Theme

function updateNavbarTheme() {
  const sections = document.querySelectorAll(".light, .dark");

  let navbarCenterY = navbar.offsetHeight + 0; // a bit below navbar
  let activeSectionTheme = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= navbarCenterY && rect.bottom >= navbarCenterY) {
      if (section.classList.contains("light")) {
        activeSectionTheme = "light";
      } else if (section.classList.contains("dark")) {
        activeSectionTheme = "dark";
      }
    }
  });

  if (activeSectionTheme) {
    navbar.classList.remove("light", "dark");
    navbar.classList.add(activeSectionTheme);
  }
}

// Navbar Background Scroll Effect

function updateNavbarBackground() {
  if (window.scrollY > 0) {
    navbarBackground.classList.add("scrolled");
  } else {
    navbarBackground.classList.remove("scrolled");
  }
}

// Combined scroll event handler
function handleScroll() {
  updateNavbarBackground();
  handleNavbarScroll();
  updateNavbarTheme();
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", updateNavbarTheme);
