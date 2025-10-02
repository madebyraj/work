const paras = document.querySelectorAll(".inner-scroll .para");
const scrollWrapper = document.querySelector(".scroll-wrapper");

function updateActive() {
  const scrollTop = window.scrollY;
  const wrapperTop = scrollWrapper.offsetTop;
  const relativeScroll = scrollTop - wrapperTop;

  const stepHeight = window.innerHeight * 1;

  const index = Math.floor(relativeScroll / stepHeight);

  paras.forEach((p, i) => {
    p.classList.toggle("active", i === index);
  });
}

window.addEventListener("scroll", updateActive);
window.addEventListener("load", updateActive);

// const scrollSection = document.querySelector(".scroll-section");
// let animated = false;

// function triggerParaAnimation() {
//   const rect = scrollSection.getBoundingClientRect();
//   const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

//   if (inView && !animated) {
//     paras.forEach((p) => p.classList.add("animate"));
//     animated = true;
//   }
// }

// window.addEventListener("scroll", triggerParaAnimation);
// window.addEventListener("load", triggerParaAnimation);



          <!-- <li class="gn-item gn-item-menu gn-resume">
            <a class="gn-link gn-link-resume"
              href="https://drive.google.com/file/d/1X_XBJ3qEVbgszznd8boW7VWUfITJwApi/view?usp=sharing" target="_blank">
              Resume
            </a>
          </li> -->