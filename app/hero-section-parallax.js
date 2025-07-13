window.addEventListener("scroll", function () {
  parallax();
  fadeHeadlineAndEyebrow();
});

function parallax() {
  const scrolled = window.scrollY;
  const heroSection = document.querySelector(".hero-section");

  if (heroSection) {
    heroSection.style.top = `-${scrolled * 0.0025}rem`;
  }
}

function fadeHeadlineAndEyebrow() {
  const heroBeforeSection = document.querySelector(".hero-section-before");

  if (heroBeforeSection) {
    // Calculate opacity based on scroll position
    const scrolled = window.scrollY;
    const fadeStart = 0;
    const fadeEnd = 125;

    // Calculate fade percentage
    let fadeProgress = (scrolled - fadeStart) / (fadeEnd - fadeStart);
    fadeProgress = Math.max(0, Math.min(1, fadeProgress)); // Clamp between 0 and 1

    // Apply fade effect only (no transform/movement)
    const opacity = 1 - fadeProgress;
    heroBeforeSection.style.opacity = opacity;
  }
}
