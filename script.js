const canvas = document.querySelector("#network");
const context = canvas.getContext("2d");
let points = [];

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = window.innerWidth * ratio;
  canvas.height = window.innerHeight * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  points = Array.from({ length: Math.min(42, Math.floor(window.innerWidth / 28)) }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - .5) * .18,
    vy: (Math.random() - .5) * .18
  }));
}

function drawNetwork() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  points.forEach((point, index) => {
    point.x += point.vx;
    point.y += point.vy;
    if (point.x < 0 || point.x > window.innerWidth) point.vx *= -1;
    if (point.y < 0 || point.y > window.innerHeight) point.vy *= -1;
    context.fillStyle = "rgba(215, 244, 77, .35)";
    context.fillRect(point.x, point.y, 1.5, 1.5);
    points.slice(index + 1).forEach((other) => {
      const distance = Math.hypot(point.x - other.x, point.y - other.y);
      if (distance < 145) {
        context.strokeStyle = `rgba(215, 244, 77, ${.1 * (1 - distance / 145)})`;
        context.lineWidth = .5;
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(other.x, other.y);
        context.stroke();
      }
    });
  });
  requestAnimationFrame(drawNetwork);
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
});
document.querySelectorAll(".nav a").forEach((link) => link.addEventListener("click", () => {
  navigation.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
drawNetwork();
