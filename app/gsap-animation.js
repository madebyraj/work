// use a script tag or an external JS file

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // gsap code here!

  // Text Reveal

  gsap.utils.toArray(".myself").forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 0.48 }, // Start with opacity 0.24
      {
        opacity: 1, // End with opacity 1
        duration: 2, // Slow down the animation
        ease: "linear", // Keep the easing linear
        scrollTrigger: {
          trigger: element,
          start: "top 90%", // Start animation when the top of element is 90% from the top of the viewport
          end: "top 10%", // End animation when the top of element is 10% from the top of the viewport
          scrub: true, // Smoothly scrub the animation as you scroll
          toggleActions: "play reverse play reverse", // Reverse the animation when scrolling up
          onLeave: () =>
            gsap.to(element, { opacity: 0.48, duration: 1, ease: "linear" }), // Fade out to 0.64 when scrolling past the bottom
          onLeaveBack: () =>
            gsap.to(element, { opacity: 0.48, duration: 1, ease: "linear" }), // Fade out to 0.64 when scrolling past the top
        },
      }
    );
  });

  
});
