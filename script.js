// PAGE LOADER
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.6s ease";
  setTimeout(() => loader.style.display = "none", 600);
});

// SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);
