// ===== DARK MODE =====
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
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
