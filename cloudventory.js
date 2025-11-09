// ===== DARK MODE =====
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// ===== CAROUSEL =====
window.addEventListener("load", () => {
  const slides = document.querySelectorAll(".carousel img");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
});

// ===== TAHUN OTOMATIS =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== SCROLL REVEAL EFFECT =====
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('show');
    } else {
      reveals[i].classList.remove('show');
    }
  }
});


