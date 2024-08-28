// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});




// Link Active State

const navLinkEls = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
  if (navLinkEl.href.includes (windowPathname)) {
    navLinkEl.classList.add('current');
  }
});
