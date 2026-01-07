document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- CART ---------------- */
  let cart = [];

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = btn.dataset.price;
      cart.push({ name, price });
      document.getElementById("cart-count").innerText = cart.length + " items";
    });
  });

  document.getElementById("whatsappBtn").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Please add items first");
      return;
    }
    let msg = "Order from Sadiya's Cloud Kitchen:%0A";
    cart.forEach(i => msg += `• ${i.name} - ₹${i.price}%0A`);
    window.open("https://wa.me/917549126937?text=" + msg);
  });

  /* ---------------- TABS ---------------- */
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".menu").forEach(m => m.classList.remove("show"));
      document.getElementById(tab.dataset.target).classList.add("show");

      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });

  /* ---------------- HERO SLIDER ---------------- */
  let slides = document.querySelectorAll(".hero-slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3500);

});
