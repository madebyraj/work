// Mobile Version

const localNavMenuCta = document.querySelector("nav .localnav-menucta");
const localNav = document.querySelector(".localnav");
const localNavCurtain = document.querySelector(".localnav-curtain");

localNavMenuCta.addEventListener("click", () => {
  localNav.classList.toggle("active");
  localNavCurtain.classList.toggle("active");
});

localNavCurtain.addEventListener("click", () => {
  localNav.classList.remove("active");
  localNavCurtain.classList.remove("active");
});

// Link Active State

const localNavMenuLinks = document.querySelectorAll(".localnav-menu-link");
const windowPathname = window.location.pathname;

localNavMenuLinks.forEach((localNavMenuLink) => {
  const navLinkPathname = new URL(localNavMenuLink.href).pathname;

  if (
    windowPathname === navLinkPathname ||
    (windowPathname === "/index.html" && navLinkPathname === "/")
  ) {
    localNavMenuLink.classList.add("current");
  }
});
