// Function to restart animations when the different-hello-container enters the viewport
function restartAnimationOnViewport() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get all the elements with the class hello-word inside the container
          const helloWords = document.querySelectorAll(
            ".different-hello-container .hello-word"
          );

          // Loop through each word and restart the animation by toggling the class
          helloWords.forEach((word) => {
            word.style.animation = "none"; // Reset animation
            word.offsetHeight; // Trigger reflow
            word.style.animation = ""; // Restore animation
          });
        }
      });
    },
    {
      threshold: 0.5, // Adjust threshold as needed
    }
  );

  // Observe the different-hello-container
  const target = document.querySelector(".different-hello-container");
  if (target) {
    observer.observe(target);
  }
}

// Call the function on page load
window.addEventListener("load", restartAnimationOnViewport);
