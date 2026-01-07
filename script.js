let cartCount = 0;

function addToCart(name, price) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}

function filterMenu(type) {
  document.querySelectorAll('.item').forEach(item => {
    item.style.display =
      type === 'all' || item.classList.contains(type)
      ? 'block'
      : 'none';
  });
}

function sendQuotation() {
  const plates = document.getElementById("plates").value;
  const event = document.getElementById("event").value;
  const msg = `Bulk Order Request:%0APlates: ${plates}%0AEvent: ${event}`;
  window.open(`https://wa.me/917549126937?text=${msg}`);
}

/* HERO SLIDER */
let slides = document.querySelectorAll('.hero-slide');
let i = 0;
setInterval(() => {
  slides[i].classList.remove('active');
  i = (i + 1) % slides.length;
  slides[i].classList.add('active');
}, 3000);
