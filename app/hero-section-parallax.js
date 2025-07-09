window.addEventListener("scroll", function () {
  parallax();
  fadeHeadlineAndEyebrow();
});

function parallax() {
  const scrolled = window.scrollY;

  const heroSection = document.querySelector(".hero-section");
  const headline = document.querySelector(".hero-section-typography-headline");
  const eyebrow = document.querySelector(".hero-section-eyebrow");

  if (heroSection) {
    heroSection.style.top = `-${scrolled * 0.0025}rem`;
  }

  if (headline) {
    headline.style.top = `${scrolled * 0.0025}rem`;
    headline.style.opacity = 1 - scrolled * 0.0025;
  }

  if (eyebrow) {
    eyebrow.style.top = `${scrolled * 0.0025}rem`;
    eyebrow.style.opacity = 1 - scrolled * 0.0025;
  }
}

function fadeHeadlineAndEyebrow() {
  const headline = document.querySelector(".hero-section-typography-headline");
  const eyebrow = document.querySelector(".hero-section-eyebrow");

  const fade = window.scrollY > 125 ? 0 : 1;

  if (headline) headline.style.opacity = fade;
  if (eyebrow) eyebrow.style.opacity = fade;
}
