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
  const navLinkPathname = new URL(navLinkEl.href).pathname;

  if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
    navLinkEl.classList.add('current');
  }
});
