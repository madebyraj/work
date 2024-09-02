document.addEventListener("DOMContentLoaded", function () {
  const collageOuter = document.querySelector(".collage-outer");
  const prevBtn = document.querySelector(".previous-btn");
  const nextBtn = document.querySelector(".next-btn");

  function updateButtonState() {
    const scrollLeft = collageOuter.scrollLeft;
    const maxScrollLeft = collageOuter.scrollWidth - collageOuter.clientWidth;

    prevBtn.disabled = scrollLeft <= 0;
    nextBtn.disabled = scrollLeft >= maxScrollLeft;
  }

  function scrollNext() {
    const slideWidth = collageOuter.querySelector(".snap").offsetWidth + 16; // including gap
    collageOuter.scrollBy({ left: slideWidth, behavior: "smooth" });
  }

  function scrollPrev() {
    const slideWidth = collageOuter.querySelector(".snap").offsetWidth + 16; // including gap
    collageOuter.scrollBy({ left: -slideWidth, behavior: "smooth" });
  }

  nextBtn.addEventListener("click", function () {
    scrollNext();
  });

  prevBtn.addEventListener("click", function () {
    scrollPrev();
  });

  collageOuter.addEventListener("scroll", function () {
    updateButtonState();
  });

  // Initial check to disable buttons if necessary
  updateButtonState();
});
