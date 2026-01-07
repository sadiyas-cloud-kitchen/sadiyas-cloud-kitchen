let cart = [];
let slideIndex = 0;

/* HERO AUTO SLIDE */
setInterval(() => {
  const slides = document.querySelectorAll('.hero-slide');
  slides[slideIndex].classList.remove('active');
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add('active');
}, 3500);

/* CATEGORY */
function showCategory(id) {
  document.querySelectorAll('.menu').forEach(m => m.classList.remove('show'));
  document.getElementById(id).classList.add('show');

  document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

/* CART */
function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById('cart-count').innerText =
    cart.length + " items";
}

/* WHATSAPP */
function sendWhatsApp() {
  let msg = "Order from Sadiya's Cloud Kitchen:%0A";
  cart.forEach(i => msg += `• ${i.name} - ₹${i.price}%0A`);
  window.open("https://wa.me/917549126937?text=" + msg);
}
