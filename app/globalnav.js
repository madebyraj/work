const globalNavMenuIcon = document.querySelector("nav .gn-menuicon");
const globalNav = document.querySelector(".globalnav");

globalNavMenuIcon.addEventListener("click", () => {
  globalNav.classList.toggle("active");
});

// Link Active State

const globalNavLinks = document.querySelectorAll(".gn-link");
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
