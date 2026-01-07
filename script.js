let count = 0;

function addToCart() {
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

function sendWhatsapp() {
  const plates = document.getElementById("plates").value;
  const msg = `Bulk Order Request\nPlates: ${plates}`;
  window.open("https://wa.me/917549126937?text=" + encodeURIComponent(msg));
}
