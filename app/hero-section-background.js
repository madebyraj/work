const gradients = [
  [
    [241, 59, 108],
    [211, 17, 48],
  ], // heart
  [
    [52, 46, 145],
    [88, 83, 186],
  ], // sleep
  [
    [0, 77, 179],
    [0, 130, 213],
  ], // hearing
  [
    [68, 96, 19],
    [112, 154, 40],
  ], // fitness
  [
    [91, 0, 71],
    [172, 52, 72],
  ], // cycle
  [
    [0, 100, 95],
    [19, 153, 146],
  ], // mindfulness
  [
    [191, 68, 43],
    [220, 105, 33],
  ], // vision
];

const hero = document.querySelector(".hero-section");
let current = 0;

function interpolate(start, end, t) {
  return start.map((s, i) => Math.round(s + (end[i] - s) * t));
}

function animateGradient(from, to, duration = 2000) {
  let startTime;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);

    const c1 = interpolate(from[0], to[0], progress);
    const c2 = interpolate(from[1], to[1], progress);

    hero.style.background = `linear-gradient(to bottom, rgb(${c1.join(
      ","
    )}), rgb(${c2.join(",")}))`;

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function cycleGradients() {
  const next = (current + 1) % gradients.length;
  animateGradient(gradients[current], gradients[next], 3000);
  current = next;
}

// Start cycling every 4s
setInterval(cycleGradients, 4000);
