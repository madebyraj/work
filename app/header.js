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
