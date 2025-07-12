document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".scroll-container");
  const leftPaddle = document.querySelector(".paddlenav-icon-chevronleft");
  const rightPaddle = document.querySelector(".paddlenav-icon-chevronright");
  const galleryItems = document.querySelectorAll(".gallery-item");

  function getScrollAmount() {
    // Get the actual width of a gallery item plus gap
    const itemRect = galleryItems[0].getBoundingClientRect();
    const containerStyle = window.getComputedStyle(scrollContainer);
    const gap = parseInt(containerStyle.gap) || 16;
    return itemRect.width + gap;
  }

  function updatePaddleStates() {
    const scrollLeft = scrollContainer.scrollLeft;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Update left paddle - disable if at the beginning
    if (scrollLeft <= 5) {
      leftPaddle.classList.add("disabled");
    } else {
      leftPaddle.classList.remove("disabled");
    }

    // Update right paddle - disable if at the end
    if (scrollLeft >= maxScroll - 5) {
      rightPaddle.classList.add("disabled");
    } else {
      rightPaddle.classList.remove("disabled");
    }
  }

  // Initialize paddle states
  setTimeout(() => {
    updatePaddleStates();
  }, 100);

  // Left paddle click handler
  leftPaddle.addEventListener("click", function (e) {
    e.preventDefault();
    if (!this.classList.contains("disabled")) {
      const scrollAmount = getScrollAmount();
      scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  });

  // Right paddle click handler
  rightPaddle.addEventListener("click", function (e) {
    e.preventDefault();
    if (!this.classList.contains("disabled")) {
      const scrollAmount = getScrollAmount();
      scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  });

  // Update paddle states on scroll
  scrollContainer.addEventListener("scroll", function () {
    updatePaddleStates();
  });

  // Update paddle states on resize
  window.addEventListener("resize", function () {
    setTimeout(updatePaddleStates, 100);
  });
});
