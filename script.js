document.addEventListener("DOMContentLoaded", function () {

  console.log("JS running");

  /* ---------- CART ---------- */
  let cart = [];

  document.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", function () {
      cart.push({
        name: this.dataset.name,
        price: this.dataset.price
      });
      document.getElementById("cart-count").innerText = cart.length + " items";
    });
  });

  document.getElementById("whatsappBtn").addEventListener("click", function () {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    let msg = "Order:%0A";
    cart.forEach(i => msg += `• ${i.name} - ₹${i.price}%0A`);
    window.open("https://wa.me/917549126937?text=" + msg);
  });

  /* ---------- TABS ---------- */
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function () {

      document.querySelectorAll(".menu").forEach(m => {
        m.style.display = "none";
      });

      document.getElementById(this.dataset.target).style.display = "grid";

      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      this.classList.add("active");
    });
  });

});
