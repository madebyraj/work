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

// Html

<nav class="globalnav">
  <div class="gn-background">
    <div class="gn-content">
      <ul class="gn-header">
        <li class="gn-item gn-menuicon">
          <label class="gn-menuicon-label" for="gn-menustate">
            <span class="gn-menuicon-bread gn-menuicon-bread-top">
              <span class="gn-menuicon-bread-crust gn-menuicon-bread-crust-top"></span>
            </span>
            <span class="gn-menuicon-bread gn-menuicon-bread-bottom">
              <span class="gn-menuicon-bread-crust gn-menuicon-bread-crust-bottom"></span>
            </span>
          </label>
        </li>
        <li class="gn-item gn-logo">
          <a class="gn-link gn-link-logo" href="./">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 28">
              <path
                d="M12.32 0L24.64 7V21L12.32 28L0 21V7L12.32 0Z"
                fill-opacity="0.5"
              />
              <path d="M0 7L12.32 13.3V28L0 21V7Z" fill-opacity="0.75" />
              <path d="M24.64 7L12.32 13.3V28L24.64 21V7Z" fill-opacity="1" />
            </svg>
          </a>
        </li>
      </ul>
      <ul class="gn-list">
        <li class="gn-item gn-logo">
          <a class="gn-link gn-link-logo" href="./">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 28">
              <path
                d="M12.32 0L24.64 7V21L12.32 28L0 21V7L12.32 0Z"
                fill-opacity="0.5"
              />
              <path d="M0 7L12.32 13.3V28L0 21V7Z" fill-opacity="0.75" />
              <path d="M24.64 7L12.32 13.3V28L24.64 21V7Z" fill-opacity="1" />
            </svg>
          </a>
        </li>
        <li class="gn-item gn-item-menu gn-twitter">
          <a
            class="gn-link gn-link-twitter"
            href="https://x.com/madebyraj__"
            target="_blank"
            aria-label="Click Here to connect with me on X (Twitter)"
          >
            Twitter
          </a>
        </li>
        <li class="gn-item gn-item-menu gn-instagram">
          <a
            class="gn-link gn-link-instagram"
            href="https://www.instagram.com/madebyraj__/"
            target="_blank"
            aria-label="Click Here to connect with me on Instagram"
          >
            Instagram
          </a>
        </li>
        <li class="gn-item gn-item-menu gn-linkedin">
          <a
            class="gn-link gn-link-linkedin"
            href="https://www.linkedin.com/in/madebyraj"
            target="_blank"
            aria-label="Click Here to connect with me on Linkedin"
          >
            Linkedin
          </a>
        </li>
        <li class="gn-item gn-item-menu gn-mail">
          <a
            class="gn-link gn-link-mail"
            href="mailto:hi.madebyraj@gmail.com"
            target="_blank"
            aria-label="Click Here to connect with me through mail"
          >
            Mail
          </a>
        </li>
        <li class="gn-item gn-item-menu gn-resume">
          <a
            class="gn-link gn-link-resume"
            href="https://drive.google.com/file/d/1X_XBJ3qEVbgszznd8boW7VWUfITJwApi/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>;
