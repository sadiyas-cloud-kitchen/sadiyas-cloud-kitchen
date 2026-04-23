let cart = [];
let count = 0;

const heroImages = [
  "assets/hero-biryani.png",
  "assets/chicken-kabab.png",
  "assets/nonveg-meal.png"
];

let heroIndex = 0;
setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  document.getElementById("heroImg").src = heroImages[heroIndex];
}, 3000);

function addToCart(name, price) {
  cart.push({ name, price });
  count++;
  document.getElementById("cart").innerText = count;
}

function filterMenu(type) {
  document.querySelectorAll(".item").forEach(item => {
    item.style.display =
      type === "all" || item.classList.contains(type)
        ? "block"
        : "none";
  });
}

function sendCart() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let total = 0;
  let msg = "Order Details:\n\n";

  cart.forEach(i => {
    msg += `• ${i.name} - ₹${i.price}\n`;
    total += i.price;
  });

  msg += `\nTotal Amount: ₹${total}`;

  window.open(
    "https://wa.me/917549126937?text=" + encodeURIComponent(msg)
  );
}

function sendQuotation() {
  const plates = document.getElementById("plates").value;
  const msg = `Bulk Order Request\nPlates Required: ${plates}`;
  window.open(
    "https://wa.me/917549126937?text=" + encodeURIComponent(msg)
  );
}
