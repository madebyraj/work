const header = document.querySelector('.header');
const headerControl = document.querySelector('.header-control');
let isOpen = false;

headerControl.addEventListener('click', (e) => {
  e.stopPropagation();
  isOpen = !isOpen;

  if (isOpen) {
    header.classList.add('expanded');
  } else {
    header.classList.remove('expanded');
  }
});

let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    isOpen = false;
    header.classList.remove('expanded');
  }, 25);
});

document.addEventListener('click', (e) => {
  if (!header.contains(e.target)) {
    isOpen = false;
    header.classList.remove('expanded');
  }
});

header.addEventListener('click', (e) => e.stopPropagation());

const currentPath = window.location.pathname;
document.querySelectorAll('.header-navigation-link').forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

function updateHeaderTheme() {
  const sections = document.querySelectorAll(".appearance-light, .appearance-dark");

  let headerCenterY = header.offsetHeight * 0;

  let activeTheme = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= headerCenterY && rect.bottom >= headerCenterY) {
      if (section.classList.contains("appearance-light")) {
        activeTheme = "appearance-light";
      }
      else if (section.classList.contains("appearance-dark")) {
        activeTheme = "appearance-dark";
      }
    }
  });

  if (activeTheme) {
    header.classList.remove("appearance-light", "appearance-dark");
    header.classList.add(activeTheme);
  }
}

window.addEventListener("scroll", updateHeaderTheme);
window.addEventListener("load", updateHeaderTheme);
