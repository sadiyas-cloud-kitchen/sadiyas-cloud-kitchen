/* HERO SLIDER */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 4000);

/* DESSERT SLIDER */
const desserts = document.querySelectorAll(".dessert");
let dessertIndex = 0;

setInterval(() => {
  desserts[dessertIndex].classList.remove("active");
  dessertIndex = (dessertIndex + 1) % desserts.length;
  desserts[dessertIndex].classList.add("active");
}, 3000);
