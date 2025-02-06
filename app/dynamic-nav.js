// Mobile Version

const globalNavMenuCta = document.querySelector("nav .globalnav-menucta");
const globalNav = document.querySelector(".globalnav");

globalNavMenuCta.addEventListener("click", () => {
  globalNav.classList.toggle("active");
});

// Link Active State

const navLinkEls = document.querySelectorAll(".nav-link");
const windowPathname = window.location.pathname;

navLinkEls.forEach((navLinkEl) => {
  const navLinkPathname = new URL(navLinkEl.href).pathname;

  if (
    windowPathname === navLinkPathname ||
    (windowPathname === "/index.html" && navLinkPathname === "/")
  ) {
    navLinkEl.classList.add("current");
  }
});
