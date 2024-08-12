const navbar = document.getElementById("dynamic-nav-head");

let lastScrollTop = 0;

function handleScroll() {
  const currentScrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}

window.addEventListener("scroll", handleScroll);
