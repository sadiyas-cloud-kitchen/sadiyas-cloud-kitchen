let cart = [];
let currentSlide = 0;

/* HERO AUTO SLIDER */
const slides = document.querySelectorAll(".hero-slide");
setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3500);

/* CATEGORY SWITCH */
function showCategory(id, btn) {
  document.querySelectorAll(".menu").forEach(m => m.classList.remove("show"));
  document.getElementById(id).classList.add("show");

  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

/* CART */
function addToCart(name, price) {
  cart.push({ name, price });
  document.getElementById("cart-count").innerText =
    cart.length + " items";
}

/* WHATSAPP */
function sendWhatsApp() {
  if (cart.length === 0) {
    alert("Please add items first");
    return;
  }
  let msg = "Order from Sadiya's Cloud Kitchen:%0A";
  cart.forEach(i => msg += `• ${i.name} - ₹${i.price}%0A`);
  window.open("https://wa.me/917549126937?text=" + msg);
}
