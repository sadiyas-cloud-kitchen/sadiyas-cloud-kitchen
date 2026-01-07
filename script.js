// Hero slider
const slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 4500);

// Dessert slider
const desserts = document.querySelectorAll('.dessert');
let dessertIndex = 0;

setInterval(() => {
  desserts[dessertIndex].classList.remove('active');
  dessertIndex = (dessertIndex + 1) % desserts.length;
  desserts[dessertIndex].classList.add('active');
}, 3500);
