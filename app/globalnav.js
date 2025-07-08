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

// Theme

function updateNavbarTheme() {
  const navbar = document.querySelector(".globalnav");
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

window.addEventListener("scroll", updateNavbarTheme);
window.addEventListener("load", updateNavbarTheme);

const navbarBackground = document.querySelector(".gn-background");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbarBackground.classList.add("scrolled");
  } else {
    navbarBackground.classList.remove("scrolled");
  }
});
