/* HERO SLIDER */
let heroSlides = document.querySelectorAll('.slide');
let heroIndex = 0;

setInterval(() => {
  heroSlides[heroIndex].classList.remove('active');
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroSlides[heroIndex].classList.add('active');
}, 4000);

/* DESSERT SLIDER */
let desserts = document.querySelectorAll('.dessert');
let dessertIndex = 0;

setInterval(() => {
  desserts[dessertIndex].classList.remove('active');
  dessertIndex = (dessertIndex + 1) % desserts.length;
  desserts[dessertIndex].classList.add('active');
}, 3000);
