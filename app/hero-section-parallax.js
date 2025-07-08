window.addEventListener("scroll", function () {
  parallax();
  fadeHeadlineAndBadge();
});

function parallax() {
  const scrolled = window.scrollY;

  const heroSection = document.querySelector(".hero-section");
  const headline = document.querySelector(".hero-section-typography-headline");
  const badge = document.querySelector(".hero-section-badge");

  if (heroSection) {
    heroSection.style.top = `-${scrolled * 0.0025}rem`;
  }

  if (headline) {
    headline.style.top = `${scrolled * 0.0025}rem`;
    headline.style.opacity = 1 - scrolled * 0.0025;
  }

  if (badge) {
    badge.style.top = `${scrolled * 0.0025}rem`;
    badge.style.opacity = 1 - scrolled * 0.0025;
  }
}

function fadeHeadlineAndBadge() {
  const headline = document.querySelector(".hero-section-typography-headline");
  const badge = document.querySelector(".hero-section-badge");

  const fade = window.scrollY > 125 ? 0 : 1;

  if (headline) headline.style.opacity = fade;
  if (badge) badge.style.opacity = fade;
}
