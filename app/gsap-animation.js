// use a script tag or an external JS file

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // gsap code here!

  // Text Translate Y

  gsap.utils.toArray('[data-animate="text"]').forEach((element, index) => {
    gsap.fromTo(
      element,
      { y: 80, opacity: 0 }, // Start with translation 80px and opacity 0
      {
        y: 0, // End with translation 0px
        opacity: 1, // End with opacity 1
        duration: 2, // Duration of the animation
        ease: "power2.out", // Ease out animation
        delay: index * 0.3, // Delay each element based on its index
        scrollTrigger: {
          trigger: element,
          start: "top 90%", // Start animation when the top of element is 85% from the top of the viewport
          end: "top 65%", // End animation when the top of element is 20% from the top of the viewport
          scrub: 1, // Smoothly scrub the animation as you scroll
        },
      }
    );
  });

  // Tile Translate Y

  // Function to apply animation to elements with a specific custom attribute
  function animateTiles() {
    gsap.utils.toArray('[data-animate="tile"]').forEach((element, index) => {
      gsap.fromTo(
        element,
        { y: 80, opacity: 0 }, // Start with translation 80px and opacity 0
        {
          y: 0, // End with translation 0px
          opacity: 1, // End with opacity 1
          duration: 1, // Duration of the animation
          ease: "power2.out", // Ease out animation
          delay: index * 0.3, // Delay each element based on its index
          scrollTrigger: {
            trigger: element,
            start: "top 85%", // Start animation when the top of element is 85% from the top of the viewport
            end: "top 60%", // End animation when the top of element is 20% from the top of the viewport
            scrub: 1, // Smoothly scrub the animation as you scroll
          },
        }
      );
    });
  }

  // Call the function to apply animations
  animateTiles();




  //  About Snap Section Slider

  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentSlide = 0;
  let accumulatedDelta = 0;
  const wheelThreshold = 50;

  let isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let translateX = 0;

  function updateButtons() {
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
  }

  function showSlide(index, animate = true) {
    const slideWidth = slides[0].offsetWidth;
    const slideGap = 20;
    const offset = window.innerWidth / 2 - slideWidth / 2 - slideGap / 2;
    const targetX = -index * (slideWidth + slideGap) + offset;

    if (animate) {
      gsap.to(sliderWrapper, {
        x: targetX,
        duration: 0.5,
        ease: "power2.out",
        scrub: true,
      });
    } else {
      gsap.set(sliderWrapper, { x: targetX });
    }

    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    currentSlide = index;
    updateButtons();
  }

  function handleWheel(e) {
    if (
      (currentSlide === 0 && e.deltaY < 0) ||
      (currentSlide === slides.length - 1 && e.deltaY > 0)
    ) {
      return; // Allow natural page scrolling at the edges
    }

    e.preventDefault();
    accumulatedDelta += e.deltaY;

    if (Math.abs(accumulatedDelta) >= wheelThreshold) {
      if (accumulatedDelta > 0 && currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
      } else if (accumulatedDelta < 0 && currentSlide > 0) {
        showSlide(currentSlide - 1);
      }
      accumulatedDelta = 0;
    }
  }

  function handleTouchStart(e) {
    isDragging = true;
    startX = e.touches[0].clientX;
    translateX = gsap.getProperty(sliderWrapper, "x");
  }

  function handleTouchMove(e) {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;

    gsap.set(sliderWrapper, { x: translateX + deltaX });
  }

  function handleTouchEnd(e) {
    isDragging = false;
    const slideWidth = slides[0].offsetWidth;
    const slideGap = 20;
    const moveThreshold = slideWidth / 4;
    const deltaX = currentX - startX;

    if (Math.abs(deltaX) > moveThreshold) {
      if (deltaX < 0 && currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
      } else if (deltaX > 0 && currentSlide > 0) {
        showSlide(currentSlide - 1);
      } else {
        showSlide(currentSlide);
      }
    } else {
      showSlide(currentSlide);
    }
  }

  if (isTouchDevice) {
    sliderWrapper.addEventListener("touchstart", handleTouchStart);
    sliderWrapper.addEventListener("touchmove", handleTouchMove);
    sliderWrapper.addEventListener("touchend", handleTouchEnd);
  } else {
    sliderWrapper.addEventListener("wheel", handleWheel, { passive: false });
  }

  prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      showSlide(currentSlide - 1);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
      showSlide(currentSlide + 1);
    }
  });

  // Initialize the slider
  showSlide(0, false);

  // Recenter on window resize
  window.addEventListener("resize", () => {
    showSlide(currentSlide, false);
  });



});
