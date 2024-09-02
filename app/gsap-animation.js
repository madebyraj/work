// use a script tag or an external JS file

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // gsap code here!

  // Text Reveal Translate Y

  gsap.utils.toArray(".myself").forEach((element, index) => {
    gsap.fromTo(
      element,
      { y: 80, opacity: 0 }, // Start with translation 80px and opacity 0
      {
        y: 0, // End with translation 0px
        opacity: 1, // End with opacity 1
        duration: 1.5, // Duration of the animation
        ease: "power2.out", // Ease out animation
        delay: index * 0.3, // Delay each element based on its index
        scrollTrigger: {
          trigger: element,
          start: "top 85%", // Start animation when the top of element is 85% from the top of the viewport
          end: "top 20%", // End animation when the top of element is 20% from the top of the viewport
          scrub: true, // Smoothly scrub the animation as you scroll
        }
      }
    );
  });

  
});
